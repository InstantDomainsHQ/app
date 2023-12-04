import {ERROR, getSearchResults, getTlds} from "@/src/components/utils/server-utils";
import React, {useEffect, useState} from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
import * as Stomp from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import ListView, {TldInfo, WhoIsMap} from "@/src/components/list";
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
    const wsStompUrl = `http:/localhost:6868/ws`
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
    console.log("saving items: ", items)
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
    }
  }

  const handleNewSearchResults = (payload: DomainWhoIs) => {
    if (payload) {
      const oldList = loadPrevSearchResults()
      console.log("oldList: ", oldList)
      const existingWhoIsList = oldList.filter(it => it.id === payload.id)
      if (existingWhoIsList && existingWhoIsList.length > 0) {
        const existing = existingWhoIsList[0]
        console.log(payload)

        console.log("existing: ", existing)
        if (payload.tld) {
          existing.tlds[payload.tld] = {
            tld: payload.tld,
            is_available: payload.is_available,
            expires_at: payload.expires_at,
            registered_at: payload.registered_at
          }
        }
      } else {
        oldList.push({
          id: payload.id,
          domainName: payload.name,
          tlds: {}
        })
        // console.log("old list about to save....: ", oldList)
      }
      // const oldIds = oldList.map(it => it.id)
      // const newEmails = [...payload.results];
      // const unique = [];

      // for (let e of newEmails) {
      //   if (!oldIds.includes(e.id)) {
      //     unique.push(e);
      //   }
      // }
      // const updatedList = [...oldList];
      saveSearchResults([...oldList])
    }
  }

  const loadPrevSearchResults = (): Array<WhoIsMap> => {
    const items = localStorage.getItem(STRINGS.SEARCH_RESULTS)
    if (items) {
      const arr = JSON.parse(items) as Array<WhoIsMap>
      // console.log("arr: ", arr)
      // arr.forEach((it: WhoIsMap) => {
      //   // console.log("it: ", new Map(Object.entries(it.tlds)))
      //   // console.log(typeof it)
      //   it.tlds = new Map(Object.entries(it.tlds))
      //   // console.log("it: ", it)
      //   // return {
      //   //   id: it.id,
      //   //   domainName: it.domainName,
      //   //   tlds: it.tlds ? new Map<string, TldInfo>(it.tlds) : new Map<string, TldInfo>(),
      //   // }
      // });
      return arr
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
                  {/*<svg className="absolute left-2 block h-5 w-5 text-gray-400"*/}
                  {/*     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
                  {/*     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                  {/*     strokeLinejoin="round">*/}
                  {/*  <circle cx="11" cy="11" r="8" className=""></circle>*/}
                  {/*  <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>*/}
                  {/*</svg>*/}
                  {/*<div className="w-full flex">*/}
                  {/*  <input*/}
                  {/*      name="search"*/}
                  {/*      onChange={onChange}*/}
                  {/*      className="block w-full rounded-3xl px-6 py-6 border border-gray-100 bg-gray-100 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"*/}
                  {/*      type="text" placeholder={'Search to your hearts content'}*/}
                  {/*      value={query}/>*/}

                  {/*  <div>*/}
                  {/*    <button*/}
                  {/*        onClick={onSearch}*/}
                  {/*        // className="ml-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"*/}
                  {/*        className="absolute bg-blue-700 hover:bg-blue-900 text-white text-lg font-bold py-2 px-4 rounded-full"*/}
                  {/*    >Generate*/}
                  {/*    </button>*/}
                  {/*  </div>*/}
                  {/*</div>*/}


                      <div className="relative items-center justify-between w-full flex">
                        <div className="absolute top-4 left-3">
                          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                        <input type="text" className="px-6 py-6 w-full rounded-3xl border border-gray-100 bg-gray-100 shadow-sm outline-none focus:border-blue-500 text-2xl font-bold" placeholder="Search anything..."/>
                          <div className="absolute top-2 right-2 px-6 py-2">

                            <button className="bg-blue-700 hover:bg-blue-900 text-white text-lg font-bold py-2 px-4 rounded-full">Generate</button>

                          </div>
                      </div>


                {/*  <div className="hero bg-gredient-dark h-400px flex flex-col px-2">*/}
                {/*    <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">*/}
                {/*      <form className="flex flex-row">*/}
                {/*<span*/}
                {/*    className="flex items-center bg-gray-100 rounded rounded-r-2xl border-0 px-3 font-bold text-grey-100"/>*/}
                {/*        <input*/}
                {/*            className="px-6 py-6 border border-gray-100 bg-gray-100 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"*/}
                {/*            type="text" placeholder="What do you want to learn?"/>*/}
                {/*<span*/}
                {/*    className="flex items-center bg-gray-100 rounded rounded-l-none border-0 px-3 font-bold text-grey-100">*/}
                {/*    <button*/}
                {/*        className="bg-gredient-dark hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded">Search</button>*/}
                {/*</span>*/}
                {/*      </form>*/}
                {/*    </div>*/}
                {/*  </div>*/}


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