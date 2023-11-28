import React, {FC, useEffect, useState} from "react";
import { Drawer } from 'rsuite';
import {EmailSearchResult} from "@/src/codegen";

export interface SidePanelProps {
  open?: boolean,
  lead?: EmailSearchResult
}

const SidePanel: FC<SidePanelProps> = (props) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(props.open)
  }, [props.open])

  const isValidString = (value: any) => {
    if (value && value !== 'null') {
      return true
    }
    return false
  }

  return (
      <Drawer size={"xs"} placement={"right"} open={open} onClose={() => setOpen(false)} className="z-max b">
        <Drawer.Body style={{bottom: 0}}>
          <div className="bg-white rounded-lg py-3">
            <div className="photo-wrapper p-2">
              {isValidString(props.lead?.thumbnail) &&
                <img className="mx-auto"
                     style={{width: "10em"}}
                     src={props.lead?.thumbnail}
                     alt={props.lead?.company_name} />
              }
            </div>
            <div className="p-2">
              {isValidString(props.lead?.company_name) &&
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{props.lead?.company_name}</h3>
              }
              {isValidString(props.lead?.description) &&
                <div className="text-left text-gray-400 text-xs font-semibold">
                  <p>{props.lead?.description}</p>
                </div>
              }

              <table className="text-xs my-3">
                <tbody>

                {isValidString(props.lead?.email) &&
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{props.lead?.email}</td>
                  </tr>
                }

                {isValidString(props.lead?.first_name) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">First Name</td>
                      <td className="px-2 py-2">{props.lead?.first_name }</td>
                    </tr>
                }

                {isValidString(props.lead?.last_name) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Last Name</td>
                      <td className="px-2 py-2">{props.lead?.last_name}</td>
                    </tr>
                }

                {isValidString(props.lead?.age)  &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Age</td>
                      <td className="px-2 py-2">{props.lead?.age}</td>
                    </tr>
                }

                {isValidString(props.lead?.gender) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Gender</td>
                      <td className="px-2 py-2">{props.lead?.gender}</td>
                    </tr>
                }

                {isValidString(props.lead?.job_title) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Job Title</td>
                      <td className="px-2 py-2">{props.lead?.job_title}</td>
                    </tr>
                }

                {isValidString(props.lead?.linkedin_profile) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">LinkedIn</td>
                      <td className="px-2 py-2">{props.lead?.linkedin_profile}</td>
                    </tr>
                }

                {isValidString(props.lead?.phone_number) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                      <td className="px-2 py-2">{props.lead?.phone_number}</td>
                    </tr>
                }

                {isValidString(props.lead?.website) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Website</td>
                      <td className="px-2 py-2">
                        <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                           href={props.lead?.website}>{props.lead?.website}</a>
                        </td>
                    </tr>
                }

                {isValidString(props.lead?.company_size) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Company Size</td>
                      <td className="px-2 py-2">{props.lead?.company_size}</td>
                    </tr>
                }

                {isValidString(props.lead?.country) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Country</td>
                      <td className="px-2 py-2">{props.lead?.country}</td>
                    </tr>
                }

                {isValidString(props.lead?.city) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">City</td>
                      <td className="px-2 py-2">{props.lead?.city}</td>
                    </tr>
                }

                {isValidString(props.lead?.state) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">State</td>
                      <td className="px-2 py-2">{props.lead?.state}</td>
                    </tr>
                }

                {isValidString(props.lead?.industry) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Industry</td>
                      <td className="px-2 py-2">{props.lead?.industry}</td>
                    </tr>
                }

                {isValidString(props.lead?.keywords) &&
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Keywords</td>
                      <td className="px-2 py-2">{props.lead?.keywords}</td>
                    </tr>
                }

                </tbody>
              </table>

            </div>
          </div>
        </Drawer.Body>
      </Drawer>
  )
}
export default SidePanel;