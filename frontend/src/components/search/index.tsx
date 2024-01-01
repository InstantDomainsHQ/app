import {
  DEBUG,
  ERROR,
  getSearchResults,
  getTlds,
  getWhoisResult
} from "@/src/components/utils/server-utils";
import React, {useEffect, useState} from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
import * as Stomp from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import ListView, { WhoIsMap} from "@/src/components/list";
import {STRINGS} from "@/src/components/utils/constants";
import {DomainWhoIs, WebsocketPayload} from "@/src/codegen";
import { BASE_PATH } from "@/src/codegen/base";
import { InfinitySpin } from  'react-loader-spinner'
import {getAuthToken} from "@/src/components/utils/headerConfig";
import CheckBoxes from "@/src/components/checkbox";

export default function SearchBox() {
  const {authUser} = useAuthContext()
  const [query, setQuery] = useState('')
  const [inProgress, setInProgress] = useState(false)
  const [maybeShowNoResultsFound, setMaybeShowNoResultsFound] = useState(false)
  const [authToken, setAuthToken] = useState("")
  const [whoIsResults, setWhoIsResults] = useState<Array<WhoIsMap>>([])
  const [allTlds, setAllTlds] = useState<Array<string>>([])
  const [userSelectedTlds, setUserSelectedTlds] = useState<Array<string>>([])
  const [userSelectedTldsInitial, setUserSelectedTldsInitial] = useState<Array<string>>([])
  const [showSelectTldError, setShowSelectTldError] = useState(false)

  useEffect(() => {
    getAuthToken(authUser)
    .then(token => {
      setAuthToken(token)
      fetchTlds()
    })
  }, [authUser])

  useEffect(() => {
    clearSearchResults()
    // setWhoIsResults(loadPrevSearchResults())
  }, []);

  useEffect(() => {
    setUserSelectedTlds([
        ".com",
        ".net",
        ".org",
        ".io",
        ".ai",
    ])
  }, []);

  const fetchTlds = () => {
    getTlds(authUser).then(result => {
      setAllTlds(result["tlds"])
      localStorage.setItem(STRINGS.TLDS, JSON.stringify(result))
    }).catch(e => ERROR(e));
  }

  const handleSubscription = (messageOutput: any) => {
    if (messageOutput && messageOutput.body) {
      const payload = JSON.parse(messageOutput.body) as WebsocketPayload;
      if (payload.type === "DomainWhoIs") {
        handleNewSearchResults(payload.data as DomainWhoIs)
      }
    }
  };

  useEffect(() => {
    const sock = new SockJS(`${BASE_PATH}/ws`)
    try {
      const client = Stomp.Stomp.over(() => sock);
      client.debug = () => {}
      client.connect({}, function (frame) {
        client.subscribe(`/user/${authUser.uid}/queue`, handleSubscription);
      });
    } catch (e) {
      ERROR(e)
    }
  }, [authToken])


  const clearSearchResults = (): void => {
    localStorage.setItem(STRINGS.SEARCH_RESULTS, JSON.stringify([]))
    setWhoIsResults([])
  }

  const saveSearchResults = (items: Array<WhoIsMap>): void => {
    localStorage.setItem(STRINGS.SEARCH_RESULTS, JSON.stringify(items))
    setWhoIsResults(items)
  }

  const onChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const onSearch = () => {
    let value = query?.trim()
    if (userSelectedTlds.length == 0) {
      setShowSelectTldError(true)
    } else if (value) {
      setShowSelectTldError(false)
      setInProgress(true)
      setUserSelectedTldsInitial(userSelectedTlds)
      getSearchResults(value, userSelectedTlds, authUser).then(res => {});
      const timer = setTimeout(() => {
        setInProgress(false)
      }, 10000);
    }
  }

  const onPartialSearch = (tld: string, domain: string) => {
    getWhoisResult(tld, domain, authUser).then(res => {});
  }

  const handleNewSearchResults = (payload: DomainWhoIs) => {
    if (payload) {
      const oldList = loadPrevSearchResults()
      const existingWhoIsList = oldList.filter(it => it.id === payload.id)
      DEBUG("Received:: ", payload)
      if (existingWhoIsList && existingWhoIsList.length > 0) {
        const existing = existingWhoIsList[0]
        if (payload.tld) {
          existing.tlds[payload.tld] = {
            tld: payload.tld,
            is_available: payload.is_available,
            expires_at: payload.expires_at,
            registered_at: payload.registered_at,
            price: payload.price,
            whois_url: payload.whois_url,
            affiliate_link: payload.affiliate_link
          }
        }
      } else {
        oldList.push({
          id: payload.id,
          domainName: payload.name,
          tlds: {}
        })
      }
      saveSearchResults([...oldList])
    }
  }

  const loadPrevSearchResults = (): Array<WhoIsMap> => {
    const items = localStorage.getItem(STRINGS.SEARCH_RESULTS)
    if (items) {
      return JSON.parse(items) as Array<WhoIsMap>
    }
    return []
  }

  const onUpdateUserSelectedTlds = (tlds: Array<string>) => {
    // if (whoIsResults.length > 0) return // do not allow tld toggling on the table if there is an existing search result
    const newSelection = tlds.filter(item => !userSelectedTlds.includes(item))
    setAllTlds([...allTlds])
    setUserSelectedTlds(tlds)
    if (tlds.length > 0) {
      setShowSelectTldError(false)
    }

    // Start a new search for the selected tlds if there is an existing search result
    if (newSelection.length > 0 && !!query && whoIsResults.length > 0) {
      // onPartialSearch()
    }
  }

  return (
      <section className="container mx-auto py-2">
        <div className=" w-screen max-w-screen-md mx-auto">
          <div className="flex flex-col">
            <div className="rounded-xl  bg-white p-2 ">
              <div>
                <div className="relative mb-2 w-full flex  items-center justify-between">
                      <div className="relative items-center justify-between w-full flex">
                        <div className="absolute top-4 left-3">
                          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                        <textarea
                            rows={1}
                            required={true}
                            onChange={onChange}
                             className="resize-none h-20 pt-5 pb-5 pr-10 sm:pr-20 pl-10 w-full mr-10 rounded-3xl border border-gray-100 bg-gray-100 shadow-sm outline-none focus:border-blue-500 text-sm sm:text-2xl font-bold" placeholder="Describe your product"/>
                        <button
                            onClick={onSearch}>
                        <div className="absolute top-0 sm:top-0 right-0 sm:px-6 px-3 mr-5 bg-blue-700 hover:bg-blue-900 h-20 rounded-r-3xl w-[60px] sm:w-[100px]">
                            <div className="h-20 mt-4">

                                <img className="h-10 w-auto"
                                     src="/assets/image/search.svg" alt=""/>

                            </div>
                          </div>
                        </button>
                      </div>
                </div>
              </div>
            </div>
            {showSelectTldError &&
                <div className="flex flex-col">
                  <span className="text-center text-red-500">You must select at least one domain extension</span>
                </div>
            }

            <div className="flex flex-col">
              <CheckBoxes
                  onUpdateUserSelectedTlds={onUpdateUserSelectedTlds}
                  allTlds={allTlds}
                  userSelectedTlds={userSelectedTlds}/>
            </div>
          </div>

        </div>
          <div className="flex justify-center mx-auto max-w-full">
            {inProgress &&
                <InfinitySpin
                    width='164'
                    color="#135eee"
                />
            }
          </div>

        {maybeShowNoResultsFound ?
            <div className="flex justify-center mx-auto max-w-full">
              <span className="ml-2 text-sm tracking-wide">No results found</span>
            </div> : <>{whoIsResults.length > 0 && <ListView
                allTlds={allTlds}
                userSelectedTlds={userSelectedTlds}
                userSelectedTldsInitial={userSelectedTldsInitial}
                records={whoIsResults}
                clearSearchResults={clearSearchResults}
            />}</>
        }
      </section>
  )
}