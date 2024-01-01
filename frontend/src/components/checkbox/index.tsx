import React, {FC, useEffect, useState} from "react";
import {STRINGS} from "@/src/components/utils/constants";
import {ERROR} from "@/src/components/utils/server-utils";

export interface CheckBoxProps {
  allTlds?: Array<string>
  userSelectedTlds?: Array<string>
  onUpdateUserSelectedTlds: (tlds: Array<string>) => void
}

const CheckBoxes: FC<CheckBoxProps> = (props) => {
  const [allTlds, setAllTlds] = useState<Array<string>>([])

  useEffect(() => {
    setAllTlds([...props.allTlds])
  }, [props.allTlds]);

  const onCheck = (e) => {
    e.preventDefault()
    const tld = e.target.value
    let updated = [...props.userSelectedTlds]
    if (isChecked(tld)) {
      updated = updated.filter(item => item !== tld)
    } else {
      updated.push(tld)
    }
    props.onUpdateUserSelectedTlds(updated)
  }

  const isChecked = (tld: string) => {
    return props.userSelectedTlds.includes(tld)
  }

  return (

      <>
        <div className="flex justify-center mt-4 mb-4">
          <div className="grid grid-cols-4 sm:grid-cols-6">
          {allTlds?.map(item => {
            return <div className="mb-[0.125rem] mr-2 inline-block min-h-[1.5rem] pl-[0.5rem]" key={item}>

              <label className="inline-block pl-[0.35rem] hover:cursor-pointer mt-1 mb-1">
                <input
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                    type="checkbox"
                    onChange={onCheck}
                    checked={isChecked(item)}
                    value={item} />
                <span className="pl-2">{item}</span>
              </label>
            </div>
          })}
          </div>
        </div>
      </>
  )
}
export default CheckBoxes;