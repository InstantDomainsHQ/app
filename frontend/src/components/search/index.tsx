import {ERROR, getSearchResults, getTlds} from "@/src/components/utils/server-utils";
import React, {useEffect, useState} from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
import * as Stomp from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import ListView, { WhoIsMap} from "@/src/components/list";
import {STRINGS} from "@/src/components/utils/constants";
import {DomainWhoIs, WebsocketPayload} from "@/src/codegen";
import { InfinitySpin } from  'react-loader-spinner'
import {getAuthToken} from "@/src/components/utils/headerConfig";

export default function SearchBox() {
  const {authUser} = useAuthContext()
  const [query, setQuery] = useState('')
  const [inProgress, setInProgress] = useState(false)
  const [maybeShowNoResultsFound, setMaybeShowNoResultsFound] = useState(false)
  const [authToken, setAuthToken] = useState("")
  const [whoIsResults, setWhoIsResults] = useState<Array<WhoIsMap>>([])

  useEffect(() => {
    getAuthToken(authUser)
    .then(token => {
      setAuthToken(token)
      fetchTlds()
    })
  }, [authUser])

  useEffect(() => {
    setWhoIsResults(loadPrevSearchResults())
  }, []);

  const fetchTlds = () => {
    getTlds(authUser).then(result => {
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
    // REACT_APP_WS_URL=http://localhost:8080/ws
    document.cookie = `Authorization=${authToken}`
    const wsStompUrl = `http:/localhost:9090/ws`
    const sock = new SockJS(wsStompUrl)
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
    if (value) {
      clearSearchResults()
      setInProgress(true)
      getSearchResults(value, authUser).then(res => {});
      const timer = setTimeout(() => {
        setInProgress(false)
      }, 10000);
    }
  }

  const handleNewSearchResults = (payload: DomainWhoIs) => {
    if (payload) {
      const oldList = loadPrevSearchResults()
      // console.log("oldList: ", oldList)
      const existingWhoIsList = oldList.filter(it => it.id === payload.id)
      if (existingWhoIsList && existingWhoIsList.length > 0) {
        const existing = existingWhoIsList[0]
        console.log(payload)

        console.log("Received:: ", payload)
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

  return (
      <section className="container px-4 mx-auto py-2">
        <div className="m-6 w-screen max-w-screen-md mx-auto">
          <div className="flex flex-col">
            <div className="rounded-xl  bg-white p-2 ">
              <div>
                <div className="relative mb-2 w-full flex  items-center justify-between">
                      <div className="relative items-center justify-between w-full flex">
                        <div className="absolute top-4 left-3">
                          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                        <input
                            onChange={onChange}
                            type="text" className="px-6 py-6 w-full rounded-3xl border border-gray-100 bg-gray-100 shadow-sm outline-none focus:border-blue-500 text-2xl font-bold" placeholder="Describe your product or enter keywords"/>
                          <div className="absolute top-2 right-2 px-6 py-3">
                            <button
                                onClick={onSearch}
                                className="bg-blue-700 hover:bg-blue-900 text-white text-lg font-bold py-2 px-4 rounded-full sm:text-sm">Generate</button>
                          </div>
                      </div>
                </div>
              </div>
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
            </div> : <>{whoIsResults.length > 0 && <ListView records={whoIsResults}/>}</>
        }
      </section>
  )
}