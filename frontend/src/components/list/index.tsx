import React, {FC, useEffect, useState} from "react";
import {STRINGS} from "@/src/components/utils/constants";
import {ERROR} from "@/src/components/utils/server-utils";

export interface WhoIsResults {
  records?: Array<WhoIsMap>
  allTlds?: Array<string>
  userSelectedTlds?: Array<string>
  userSelectedTldsInitial?: Array<string>
  clearSearchResults: () => void
}

export interface WhoIsMap {
  id: string,
  domainName: string,
  tlds: {}
}


const pageRecords = (currPage: number, allRecords: Array<WhoIsMap> | undefined) => {
  if (allRecords && allRecords.length) {
    const startIndex = currPage * STRINGS.MAX_PAGE_SIZE
    const endIndex = startIndex + STRINGS.MAX_PAGE_SIZE
    const _allRecords = [...allRecords]
    return _allRecords.slice(startIndex, endIndex)
  }
  return []
}

const ListView: FC<WhoIsResults> = (props) => {
  const [currPage, setCurrPage] = useState(0)
  const [records, setRecords] = useState<Array<WhoIsMap>>([])
  const [tlds, setTlds] = useState<Array<string>>()

  useEffect(() => {
    setRecords(pageRecords(currPage, props.records))
  }, [props.records, currPage])

  useEffect(() => {
    loadTlds()
  }, [props.allTlds]);

  const loadTlds = () => {
    const orderedTlds = []
    props.allTlds.map(item => {
      if (props.userSelectedTlds.includes(item)) {
        orderedTlds.push(item)
      }
    })
    setTlds(orderedTlds)
  }

  const getCleanString = (value: string): string => {
    const maxLength = 64
    if (value && value !== 'null') {
      if (value.length > maxLength) {
        return value.substring(0, maxLength) + "..."
      }
      return value
    }
    return ''
  }
  const getHeaders = () => {
    return (
        <tr>
          <th
              className="px-16 py-4 text-sm text-center font-bold border-t-8 border-l-8 border-r-8 border-gray-100 bg-red-500 hover:bg-red-700">
            <div className="text-white">
              <button onClick={props.clearSearchResults}>
                Reset
              </button>
            </div>

          </th>
          {
            tlds?.map(it => {
              return (
                  <th scope="col" key={it}
                      className="px-16 py-4 text-sm text-center font-bold border-t-8 border-l-8 border-r-8 border-gray-100">
                    {it}
                  </th>
              )
            })
          }
        </tr>
    )
  }

  const domainIsAvailable = (whois: WhoIsMap, tld: string) => {
    if (whois.tlds[tld]) {
      if (whois.tlds[tld].is_available) {
        return STRINGS.AVAILABLE
      }
      return STRINGS.NOT_AVAILABLE
    }
    return STRINGS.UNKNOWN
  }

  const getRow = (whoIs: WhoIsMap) => {
    return (
        <tr key={whoIs.id}>
          <td className="sticky left-0 h-fit bg-white text-gray-500 font-bold text-lg px-4 border-t-8 border-b-8 border-l-8 border-gray-100">
            {getCleanString(whoIs.domainName)}
          </td>

          {
            tlds?.map((it, index) => {
              const status = domainIsAvailable(whoIs, it)
              const bgClassName = `rounded-md text-center p-2 ${ status === STRINGS.AVAILABLE ? 'bg-green-700' : status === STRINGS.NOT_AVAILABLE ? 'bg-red-500' : 'bg-blue-100'}`
              const className = `px-0.5 text-sm font-medium border-b-4 border-gray-100`
              // @ts-ignore
              return (
                  <td className={className} key={`${it}-${index}`}>
                    <div className={bgClassName}>
                      {status === STRINGS.AVAILABLE ?
                          <a href={whoIs.tlds[it]?.affiliate_link} target="_blank" className="hover:no-underline text-black">
                        <div className="text-white font-bold block justify-center">
                            <span className="block text-center text-xs">Available</span>
                            <span className="block text-center h-4">{whoIs.tlds[it]?.price}</span>
                        <span><button className="px-2 py-1 mt-1 bg-white hover:bg-gray-200 text-black text-xs font-bold  rounded-lg">
                                    Click to Buy
                                  </button></span>
                      </div>
                          </a>
                          :
                          <>
                          {
                            status === STRINGS.NOT_AVAILABLE ?
                                <a href={whoIs.tlds[it]?.whois_url} target="_blank" className="hover:no-underline text-black">
                              <div className="text-white font-bold block justify-center">
                                <span className="block text-center text-xs">Taken</span>
                                <span className="block text-center h-4"></span>
                                <span><button className="px-2 py-1 mt-1 bg-white hover:bg-gray-200 text-black text-xs font-bold  rounded-lg">
                                    WhoIs
                                </button>
                                </span>
                              </div>
                                </a>:
                              <>
                                <div role="status" className="h-14 justify-center align-middle py-4">
                                  {props.userSelectedTldsInitial.includes(whoIs.tlds[it]) ?
                                      <>
                                  <svg aria-hidden="true" className=" inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                  </svg>
                                  <span className="sr-only">Loading...</span>
                                      </> : <></>
                                  }
                                </div>
                              </>
                          }
                          </>
                      }
                    </div>
                  </td>
              )
            })
          }
        </tr>
    )
  }

  return (
      <>
        <section className="max-w-full">
                <div className="w-full overflow-x-scroll">
                  {/*<div className="w-full">*/}
                  {/*  <div className="bg-blue-700 hover:bg-blue-900">*/}
                  {/*    <button>*/}
                  {/*      Clear*/}
                  {/*    </button>*/}
                  {/*    /!*</div>*!/*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  <table className="w-full">
                    <thead>
                    {getHeaders()}
                    </thead>
                    <tbody>
                    {records.map(it => {
                      return getRow(it)
                    })}
                    </tbody>
                  </table>
                </div>
        </section>
      </>

  )
}
export default ListView;