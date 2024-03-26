import React from "react";
import { DatePicker as DatePick } from "antd";

const DatePicker = (props: any) => {
  const { label, isRequired } = props;
  
  return(
  <>
  {label && (
    <label className="text-[#333333] opacity-70  font-semibold text-[14px]" htmlFor="">
      {label}{" "}
      {isRequired && <span className="text-red-500 font-bold">*</span>}
    </label>
  )}
   <DatePick className="w-full py-2" {...props} />
  </> 
 )
}

export default DatePicker;
