import { FaAngleRight } from "react-icons/fa6";
import {
  FormColumnsProps,
  FormRowDetailsProps,
  FormRowProps,
} from "./formrowdetails.props";

function FormRowDetails(props: FormRowDetailsProps) {
  const { formRowDetails, formColumnDetails } = props;
  return (
    <>
      <div className="text-[#ffffff] bg-[#1C75BC] text-center font-semibold p-2 text-[13px]">
        Forms
      </div>
      <table className="w-[100%] border-spacing-2 form-row-details">
        <thead>
          {formRowDetails.length !== 0 ? (
            <tr className="bg-[#F0F3F8] flex-1">
              {formColumnDetails?.map((columnItem: FormColumnsProps) => {
                return (
                  <th
                    scope="col"
                    className={`text-[#555555] text-left font-semibold p-2 ${columnItem.id === "formName" && "w-[41%]"} text-[13px]`}
                    key={columnItem.id}
                    style={{
                      width: `${columnItem.width}px`,
                    }}>
                    {columnItem.label}
                  </th>
                );
              })}
            </tr>
          ) : null}
        </thead>
        <tbody className="h-auto">
          {formRowDetails?.map((data: FormRowProps, index: number) => (
            <tr key={index} className="border-b-[2px] border-[#EEEEEE] flex-1">
              {formColumnDetails?.map((column: FormColumnsProps) => {
                if (column.id === "preview") {
                  return (
                    <td
                      key={column.id}
                      className="whitespace-nowrap text-[12px] text-blue-500 cursor-pointer p-2"
                      style={{
                        width: `${column.width}px`,
                      }}>
                      <div>
                        <button
                          className="text-[#0c7ae9] rounded-3xl flex w-20 justify-end border font-semibold bg-white border-[#0c7ae9] p-[2px] "
                          onClick={() =>
                            window.open(
                              `${process.env.REACT_APP_TESTPLAYER_APPLICATION_URL}/launch?formId=${data.formGuid}&assessmentId=${data.assessmentguid}&mode=preview`,
                              "de07c4a8-402b-11ef-9c75-325096b39f47",
                              `width=${window.innerWidth},height=${window.innerHeight},noopener,noreferrer`
                            )
                          }>
                          {"Preview"}
                          <FaAngleRight className="m-1" />
                        </button>
                      </div>
                    </td>
                  );
                } else if (column.id === "sectiontotalmarks") {
                  const totalMarks =
                    typeof data[column.id as keyof FormRowProps] === "string" ? 0 : data[column.id as keyof FormRowProps] as number
                  return (
                    <td
                      key={column.id}
                      className={`font-semibold p-2 text-[12px]`}
                      style={{
                        width: `${column.width}px`,
                      }}>
                      {Number( totalMarks.toFixed(2))}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={column.id}
                      className={`${(column.id === "sections" || column.id === "sectionitems" || column.id === "sectiontotalmarks") && "font-semibold "} p-2 text-[12px]`}
                      style={{
                        width: `${column.width}px`,
                      }}>
                      {data[column.id as keyof FormRowProps]}
                      {column.id === "serialno" && "."}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
          {formRowDetails.length === 0 && (
            <tr className={`text-[14px] text-[#000000]`}>
              <td style={{ width: 500 }}>
                <div
                  className={`flex justify-between items-center mx-[5px] mt-[4px] px-[12px] py-[9px] rounded-md shadow-sm`}>
                  No Forms found
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default FormRowDetails;