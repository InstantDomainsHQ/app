import React, {FC, useEffect, useState} from "react";
import {STRINGS} from "@/src/components/utils/constants";
import {DomainWhoIs} from "@/src/codegen";
import {ERROR, getTlds} from "@/src/components/utils/server-utils";

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

const computeMaxPage = (length: undefined | number) => {
  if (length) {
    return Math.ceil(length/STRINGS.MAX_PAGE_SIZE)
  }
  return 0
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
  const [checked, setChecked] = useState<Map<string, boolean>>(new Map())
  const [allSelected, setAllSelected] = useState(false)
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



  // const selectAll = () => {
  //   if (allSelected) {
  //     setAllSelected(false)
  //     setChecked(new Map())
  //   } else {
  //     setAllSelected(true)
  //     if (props.records?.length > 0) {
  //       const allChecked = new Map<string, boolean>
  //       for (let i = 0; i < props.records.length; i++) {
  //         allChecked.set(props.records[i].id, true)
  //       }
  //       setChecked(allChecked)
  //     }
  //   }
  // }

  // const currentlyCheckedItem = (): DomainWhoIs | undefined => {
  //   if (checked.size === 1) {
  //     const keys = checked.keys()
  //     while (keys) {
  //       const key = keys.next().value as string
  //       return  records.filter(it => it.id === key)[0]
  //     }
  //   }
  // }

  const prevPage = () => {
    setCurrPage(Math.max(currPage - 1, 0))
  }

  const nextPage = () => {
    setCurrPage(Math.min(currPage + 1, computeMaxPage(props.records?.length) - 1))
  }

  // const onExport = () => {
  //   const csvConfig = mkConfig({ useKeysAsHeaders: true ,
  //     filename: "export.csv"});
  //   const toExport = new Array<EmailSearchResult>()
  //   for (let i = 0; i < records.length; i++) {
  //     const id = records[i].id
  //     if (checked.has(id)) {
  //       toExport.push(records[i])
  //     }
  //   }
  //   if (toExport.length > 0) {
  //     // @ts-ignore
  //     const csv = generateCsv(csvConfig)(toExport);
  //     DEBUG("csv: ", csv)
  //     download(csvConfig)(csv)
  //   }
  // }

  // const onRowSelect = (leadId: string) => {
  //   // @ts-ignore
  //   const updatedChecked = new Map<string, boolean>([...checked]);
  //   if (updatedChecked.has(leadId)) {
  //     updatedChecked.delete(leadId)
  //   } else {
  //     updatedChecked.set(leadId, true)
  //   }
  //   setChecked(updatedChecked)
  // }

  // const getCheckedState = (leadId: string) => {
  //   return checked.get(leadId) || false
  // }

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

  // const getCheckBox = (leadId: string)  =>  {
  //   return (
  //       <td className="px-4 py-4 text-sm font-medium">
  //         <div>
  //           <input checked={getCheckedState(leadId)} id="checked-checkbox" type="checkbox" value="" onChange={() => onRowSelect(leadId)}
  //                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
  //         </div>
  //       </td>
  //   )
  // }

  const getHeaders = () => {
    return (
        <tr>
          {/*<th scope="col"*/}
          {/*    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">*/}
          {/*</th>*/}
          <th scope="col"
              className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
            Name
          </th>
          {
            tlds?.map(it => {
              return (
                  <th scope="col" key={it}
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {it}
                  </th>
              )
            })
          }
          {/*<th scope="col"*/}
          {/*    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">*/}
          {/*  Status*/}
          {/*</th>*/}
          {/*<th scope="col"*/}
          {/*    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">*/}
          {/*  Company*/}
          {/*</th>*/}
          {/*{!props.isSearchResult &&*/}
          {/*    <>*/}
          {/*      <th scope="col"*/}
          {/*          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">*/}
          {/*        Description*/}
          {/*      </th>*/}
          {/*      /!*<th scope="col"*!/*/}
          {/*      /!*    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">*!/*/}
          {/*      /!*  First Name*!/*/}
          {/*      /!*</th>*!/*/}
          {/*      /!*<th scope="col"*!/*/}
          {/*      /!*    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">*!/*/}
          {/*      /!*  Last Name*!/*/}
          {/*      /!*</th>*!/*/}
          {/*      /!*<th scope="col"*!/*/}
          {/*      /!*    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">*!/*/}
          {/*      /!*  Website*!/*/}
          {/*      /!*</th>*!/*/}
          {/*    </>*/}
          {/*}*/}
        </tr>
    )
  }

  const domainIsAvailable = (whois: WhoIsMap, tld: string) => {
    if (whois.tlds[tld] && whois.tlds[tld].is_available) {
      return (
          <div
              className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
            Yes
          </div>
      )
    }
    return (
        <div
            className="inline px-3 py-1 text-sm font-normal text-red-600 bg-red-100 rounded-full dark:text-red-400 gap-x-2 dark:bg-red-800">
          No
        </div>
    )
  }

  const getRow = (whoIs: WhoIsMap) => {
    return (
        <tr key={whoIs.id}>
          {/*{getCheckBox(email.id)}*/}
          <td className="px-4 py-4 text-sm font-medium">
            <div>
              <h6 className="font-medium text-gray-800 dark:text-white ">{getCleanString(whoIs.domainName)}</h6>
            </div>
          </td>

          {
            tlds?.map((it, index) => {
              return (
                  <td className="px-4 py-4 text-sm font-medium" key={`${it}-${index}`}>
                    <div>
                      {domainIsAvailable(whoIs, it)}
                    </div>
                  </td>
              )
            })
          }

          {/*<td className="px-12 py-4 text-sm font-medium">*/}
          {/*  {email.verified ?*/}

                {/*<div*/}
                {/*    className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">*/}
                {/*  Verified*/}
                {/*</div> :*/}

                {/*<div*/}
                {/*    className="inline px-3 py-1 text-sm font-normal text-red-600 bg-red-100 rounded-full dark:text-red-400 gap-x-2 dark:bg-red-800">*/}
                {/*  Unverified*/}
                {/*</div>*/}
          {/*  }*/}

          {/*</td>*/}
          {/*<td className="px-4 py-4 text-sm font-medium">*/}
          {/*  <div>*/}
          {/*    <h6 className="font-medium text-gray-800 dark:text-white ">{getCleanString(email.company_name)}</h6>*/}
          {/*  </div>*/}
          {/*</td>*/}
          {/*{!props.isSearchResult &&*/}
          {/*    <>*/}
          {/*      <td className="px-4 py-4 text-sm font-medium">*/}
          {/*        <div>*/}
          {/*          <h6 className="font-medium text-gray-800 dark:text-white">{getCleanString(email.description)}</h6>*/}
          {/*        </div>*/}
          {/*      </td>*/}
          {/*      /!*<td className="px-4 py-4 text-sm font-medium">*!/*/}
          {/*      /!*  <div>*!/*/}
          {/*      /!*    <h5 className="font-medium text-gray-800 dark:text-white ">{getCleanString(email.first_name)}</h5>*!/*/}
          {/*      /!*  </div>*!/*/}
          {/*      /!*</td>*!/*/}
          {/*      /!*<td className="px-4 py-4 text-sm font-medium">*!/*/}
          {/*      /!*  <div>*!/*/}
          {/*      /!*    <h5 className="font-medium text-gray-800 dark:text-white ">{getCleanString(email.last_name)}</h5>*!/*/}
          {/*      /!*  </div>*!/*/}
          {/*      /!*</td>*!/*/}
          {/*      /!*<td className="px-4 py-4 text-sm font-medium">*!/*/}
          {/*      /!*  <div>*!/*/}
          {/*      /!*    <h5 className="font-medium text-gray-800 dark:text-white ">{getCleanString(email.website)}</h5>*!/*/}
          {/*      /!*  </div>*!/*/}
          {/*      /!*</td>*!/*/}
          {/*    </>*/}
          {/*}*/}
        </tr>
    )
  }

  return (
      <>
        {/*<SidePanel open={checked.size === 1} lead={currentlyCheckedItem()}/>*/}
        <section className="container px-4 mx-auto mb-10">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              {/*<div className="flex items-center gap-x-3">*/}
              {/*  <h2 className="text-lg font-medium text-gray-800 dark:text-white">Found</h2>*/}
              {/*  <span*/}
              {/*      className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{props.emails?.length ? props.emails.length : 0} contacts</span>*/}
              {/*</div>*/}

            </div>

            {/*<div className="flex items-center mt-4 gap-x-3">*/}
            {/*  {checked.size > 0 &&*/}
            {/*      <>*/}
            {/*        <button*/}
            {/*            onClick={onExport}*/}
            {/*            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">*/}
            {/*          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"*/}
            {/*               xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <g clip-path="url(#clip0_3098_154395)">*/}
            {/*              <path*/}
            {/*                  d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"*/}
            {/*                  stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"*/}
            {/*                  strokeLinejoin="round"/>*/}
            {/*            </g>*/}
            {/*            <defs>*/}
            {/*              <clipPath id="clip0_3098_154395">*/}
            {/*                <rect width="20" height="20" fill="white"/>*/}
            {/*              </clipPath>*/}
            {/*            </defs>*/}
            {/*          </svg>*/}
            {/*          <span>Export</span>*/}
            {/*        </button>*/}
            {/*      </>*/}
            {/*  }*/}
            {/*  <button*/}
            {/*      onClick={selectAll}*/}
            {/*      className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">*/}


            {/*    <img src="/assets/image/select.svg" alt="Select" style={{width: "1.25rem", height: "1.25rem", color: "#eaecf0"}}/>*/}

            {/*    <span>{checked.size > 0 ? 'Deselect All' : 'Select All'}</span>*/}
            {/*  </button>*/}

            {/*</div>*/}
          </div>


          <div className="flex flex-col mt-6 mb-20">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div
                    className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                    {getHeaders()}
                    </thead>
                    <tbody
                        className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {records.map(it => {
                      return getRow(it)
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="mt-6 sm:flex sm:items-center sm:justify-between ">*/}
          {/*  <div className="text-sm text-gray-500 dark:text-gray-400">*/}
          {/*    Page <span className="font-medium text-gray-700 dark:text-gray-100">{currPage + 1} of {computeMaxPage(props.records?.length)}</span>*/}
          {/*  </div>*/}

          {/*  <div className="flex items-center mt-4 gap-x-4 sm:mt-0">*/}
          {/*    <button*/}
          {/*        onClick={prevPage}*/}
          {/*        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">*/}
          {/*      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
          {/*           strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">*/}
          {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
          {/*              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>*/}
          {/*      </svg>*/}

          {/*      <span>*/}
          {/*          Previous*/}
          {/*      </span>*/}
          {/*    </button>*/}

          {/*    <button*/}
          {/*        onClick={nextPage}*/}
          {/*        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">*/}
          {/*      <span>*/}
          {/*          Next*/}
          {/*      </span>*/}

          {/*      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
          {/*           strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">*/}
          {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
          {/*              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>*/}
          {/*      </svg>*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*{props.isSearchResult &&*/}
          {/*<div className="flex items-center gap-x-3">*/}
          {/*  <a href="/dashboard/all-contacts">*/}
          {/*  <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">*Please note that email verification may take up to 15 minutes. Updates will be available here.</p>*/}
          {/*  </a>*/}
          {/*</div>*/}
          {/*}*/}
        </section>
      </>

  )
}
export default ListView;