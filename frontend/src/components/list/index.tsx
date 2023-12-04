import React, {FC, useEffect, useState} from "react";
import {STRINGS} from "@/src/components/utils/constants";

export interface WhoIsResults {
  records?: Array<WhoIsMap>
}

export interface TldInfo {
  tld?: string,
  is_available: boolean,
  expires_at?: number,
  registered_at?: number
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
  }, []);

  const loadTlds = () => {
    const items = localStorage.getItem(STRINGS.TLDS)
    if (items) {
      setTlds(JSON.parse(items)["tlds"])
    }
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
              className="sticky left-0 h-fit bg-white">
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
    return whois.tlds[tld] && whois.tlds[tld].is_available
  }

  const getRow = (whoIs: WhoIsMap) => {
    return (
        <tr key={whoIs.id}>
          <td className="sticky left-0 h-fit bg-white text-gray-500 font-bold text-lg px-4 border-t-8 border-b-8 border-l-8 border-gray-100">
            {getCleanString(whoIs.domainName)}
          </td>

          {
            tlds?.map((it, index) => {
              const isAvailable = domainIsAvailable(whoIs, it)
              const bgClassName = `rounded-md text-center p-2 ${ isAvailable ? 'bg-green-700' : 'bg-red-500'}`
              const className = `px-0.5 text-sm font-medium border-b-4 border-gray-100`
              return (
                  <td className={className} key={`${it}-${index}`}>
                    <div className={bgClassName}>
                      {isAvailable ?

                        <div className="text-white font-bold block justify-center">
                            <span className="block text-center text-xs">Available</span>
                            <span className="block text-center h-4">$9.28</span>
                        <span><button className="px-2 py-1 mt-1 bg-white hover:bg-gray-200 text-black text-xs font-bold  rounded-lg">Click to Buy</button></span>
                      </div>
                          :
                          <div className="text-white font-bold block justify-center">
                            <span className="block text-center text-xs">Taken</span>
                            <span className="block text-center h-4"></span>
                            <span><button className="px-2 py-1 mt-1 bg-white hover:bg-gray-200 text-black text-xs font-bold  rounded-lg">WhoIs</button></span>
                          </div>
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
        <section>
                <div className="w-full overflow-x-scroll">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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