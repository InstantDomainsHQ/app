import {ERROR, getSearchResults} from "@/src/components/utils/server-utils";
import React, {useEffect, useState} from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
import * as Stomp from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import ListView from "@/src/components/list";
import {STRINGS} from "@/src/components/utils/constants";
import {EmailSearchResult, EmailSearchResults, WebsocketPayload} from "@/src/codegen";
import { InfinitySpin } from  'react-loader-spinner'
import {getAuthToken} from "@/src/components/utils/headerConfig";

export default function SearchBox() {
  const {authUser} = useAuthContext()
  const [query, setQuery] = useState('')
  const [emails, setEmails] = useState<Array<EmailSearchResult>>([])
  const [inProgress, setInProgress] = useState(false)
  const [maybeShowNoResultsFound, setMaybeShowNoResultsFound] = useState(false)
  const [category, setCategory] = useState("website")
  const [option, setOption] = useState("full_website")
  const [taskId, setTaskId] = useState('')
  const [authToken, setAuthToken] = useState("")

  useEffect(() => {
    getAuthToken(authUser)
    .then(token => {
      setAuthToken(token)
    })
  }, [authUser])


  const handleSubscription = (messageOutput) => {
    if (messageOutput && messageOutput.body) {
      const payload = JSON.parse(messageOutput.body) as WebsocketPayload;
      if (payload.type === "EmailSearchResults") {
        handleNewSearchResults(payload.data as EmailSearchResults)
      } else if (payload.type === "TaskStatus") {
        handleTaskStatusUpdate(payload.data as string)
      }
    }
  };

  useEffect(() => {
    // REACT_APP_WS_URL=http://localhost:8080/ws
    document.cookie = `Authorization=${authToken}`
    const wsStompUrl = `http:/localhost:6060/ws`
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

  const loadPrevSearchResults = (): Array<EmailSearchResult> => {
    const items = localStorage.getItem(STRINGS.SEARCH_RESULTS)
    if (items) {
      return JSON.parse(items)
    }
    return []
  }

  const clearSearchResults = (): void => {
    localStorage.setItem(STRINGS.SEARCH_RESULTS, JSON.stringify([]))
    setEmails([])
  }

  const saveSearchResults = (items: string[]): void => {
    localStorage.setItem(STRINGS.SEARCH_RESULTS, JSON.stringify(items))
    setEmails(items);
  }

  const onChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const onOptionsChange = (e) => {
    e.preventDefault()
    setOption(e.target.value)
  }

  const onCategoryChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    setCategory(value)
    if (value === "youtube") {
      setOption("blank")
    }
  }

  const getPlaceholder = () => {
    if (category === "website") {
      return "Eg. https://example.com"
    } else {
      return "Eg. How to make sourdough bread"
    }
  }

  const disableOptions = () => {
    return category === "youtube"
  }


  const onSearch = () => {
    let value = query?.trim()
    if (value) {
      value = value.startsWith("http") ? value : "https://" + value
      clearSearchResults()
      setInProgress(true)

      getSearchResults(value, authUser).then(res => {});
    }
  }

  const handleNewSearchResults = (payload: EmailSearchResults) => {
    if (payload?.results) {
      const oldList = loadPrevSearchResults()
      const oldIds = oldList.map(it => it.id)
      const newEmails = [...payload.results];
      const unique = [];

      for (let e of newEmails) {
        if (!oldIds.includes(e.id)) {
          unique.push(e);
        }
      }
      const updatedList = [...unique, ...oldList];
      saveSearchResults(updatedList)
    }
  }

  const handleTaskStatusUpdate = (status: string) => {
    if (status === "Completed") {
      setInProgress(false)
      setMaybeShowNoResultsFound(loadPrevSearchResults().length === 0)
    }
  }

  return (
      <section className="container px-4 mx-auto py-6">
        <div className="m-6 w-screen max-w-screen-md mx-auto">
          <div className="max-w-xl mx-auto text-center lg:max-w-4xl">
            {/*<h1 className="text-base font-bold uppercase tracking-widest text-blue-600">Features</h1>*/}
            <p className="font-display text-2xl font-bold tracking-tight text-gray-900 mt-5 sm:text35xl lg:text-4xl">Find Verified Emails </p>
            <p className="max-w-3xl text-base font-normal text-gray-700 mx-auto mt-5 sm:text-sm lg:text-sm">Provide a link to your target website below</p>
          </div>

          <div className="flex flex-col">
            <div className="rounded-xl  bg-white p-6 ">
              <div>
                <div className="relative mb-4 w-full flex  items-center justify-between rounded-md">
                  <svg className="absolute left-2 block h-5 w-5 text-gray-400"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" className=""></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                  </svg>
                  <div className="w-full">
                    <input
                        name="search"
                        onChange={onChange}
                        className="h-12 block w-full rounded-md border border-gray-100 bg-gray-100 pl-10 px-10 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        type="text" placeholder={getPlaceholder()}
                        value={query}/>
                  </div>
                  <div>
                    <button
                        onClick={onSearch}
                        className="ml-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search
                    </button>
                  </div>

                </div>

                {/*<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">*/}
                {/*  /!*<div className="flex flex-col">*!/*/}
                {/*  /!*  <label htmlFor="query-category"*!/*/}
                {/*  /!*         className="text-sm font-medium text-stone-600">Category</label>*!/*/}

                {/*  /!*  <select id="query-category"*!/*/}
                {/*  /!*          onChange={onCategoryChange}*!/*/}
                {/*  /!*          className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">*!/*/}
                {/*  /!*    <option value="website" defaultChecked>Website</option>*!/*/}
                {/*  /!*    <option value="youtube">YouTube</option>*!/*/}
                {/*  /!*  </select>*!/*/}
                {/*  /!*</div>*!/*/}
                {/*  /!*<div className="flex flex-col">*!/*/}
                {/*  /!*  /!*<label htmlFor="query-restrictions" className="text-sm font-medium text-stone-600"></label>*!/*!/*/}

                {/*  /!*  <select id="query-restrictions"*!/*/}
                {/*  /!*          onChange={onOptionsChange}*!/*/}
                {/*  /!*          disabled={disableOptions()}*!/*/}
                {/*  /!*          className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">*!/*/}
                {/*  /!*    <option value="full_website" defaultChecked>{category === "youtube" ? "" : "Full Website"}</option>*!/*/}
                {/*  /!*    <option value="target_url">Target URL </option>*!/*/}
                {/*  /!*  </select>*!/*/}
                {/*  /!*</div>*!/*/}
                {/*  <div className="flex flex-col">*/}
                {/*    <div className="mt-2 grid w-full grid-cols-2 justify-end space-x-4 md:flex">*/}
                {/*      /!*<button*!/*/}
                {/*      /!*    className="rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset*!/*/}
                {/*      /!*</button>*!/*/}
                {/*      <button*/}
                {/*          onClick={onSearch}*/}
                {/*          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search*/}
                {/*      </button>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}

                {/*<div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">*/}
                {/*  <button*/}
                {/*      className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset*/}
                {/*  </button>*/}
                {/*  <button*/}
                {/*      className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search*/}
                {/*  </button>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>

        </div>

        {/*<section className="container px-4 mx-auto">*/}
          <div className="flex justify-center mx-auto max-w-full">
            {inProgress &&
                <InfinitySpin
                    width='164'
                    color="#135eee"
                />
            }
          </div>
        {/*</section>*/}

        {maybeShowNoResultsFound ?
            <div className="flex justify-center mx-auto max-w-full">
              <span className="ml-2 text-sm tracking-wide">No results found</span>
            </div> : <>{emails.length > 0 && <ListView emails={emails} isSearchResult={true}/>}</>
        }
      </section>
  )
}