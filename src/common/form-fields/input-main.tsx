import React from "react";
import Input from "./input";
import DatePicker from "./date-picker";
import { Switch } from "antd";
import ChooseFile from "./choose-file";
import Select from "./select";
import dayjs from "dayjs";
import InputArea from "./input-area";

interface InputItem {
  label?: string;
  value?: any;
  type: string;
  key: string;
  required?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  onActive?: string;
  onDeactive?: string;
  width?: string;
}

const InputMain = ({
  input,
  handleChange,
  values,
}: {
  values: any;
  input: InputItem[];
  handleChange: (e: any) => void;
}) => {
  return (
    <div className="flex flex-wrap w-full">
      {input.map((input) => {
        return (
          <div key={input.key} className={`mb-3 flex-col flex px-[10px] ${input.width ? `w-[${input.width}]` : 'w-full'}`}>
            {(input.type === "text" || input.type === "number") && (
              <Input
                type={input.type}
                placeholder={input.placeholder}
                isRequired={input.required === true}
                label={input.label}
                value={values[input.key]}
                onChange={(e) => {
                  handleChange({ name: input.key, value: e.target.value });
                }}
              />
            )}
            {input.type === "textarea" && (
              <InputArea
                type={input.type}
                placeholder={input.placeholder}
                isRequired={input.required === true}
                label={input.label}
                value={values[input.key]}
                onChange={(e) => {
                  handleChange({ name: input.key, value: e.target.value });
                }}
              />
            )}
            {input.type === "date" && (
              <DatePicker
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                isRequired={input.required === true}
                value={values[input.key] ? dayjs(new Date(values[input.key])) : null}
                onChange={(date: Date, dateString: string) => {
                  handleChange({ name: input.key, value: dateString });
                }}
              />
            )}
            {input.type === "toggler" && (
              <div className="flex gap-3">
                <div className={`${input.label ? "mr-20" : "hidden"}`}>
                  {input.label}
                </div>
                <Switch
                  checked={values[input.key]}
                  onChange={(checked: boolean) => {
                    handleChange({ name: input.key, value: checked });
                  }}
                  style={{
                    width: "24px",
                    background: values[input.key] ? "#03A790" : "#F21E1E", // Change background color based on switch state
                  }}
                />
                {values[input.key] ? (
                  <div>{input.onActive}</div>
                ) : (
                  <div>{input.onDeactive}</div>
                )}
              </div>
            )}
            {input.type === "select" && (
              <Select
                value={values[input.key]}
                placeholder={input.placeholder}
                isRequired={input.required === true}
                label={input.label}
                onChange={(e) => {
                  handleChange({ name: input.key, value: e.target.value });
                }}
              />
            )}
            {input.type === "choosefile" && (
              <ChooseFile
                label={input.label}
                isRequired={input.required === true}
                onChange={(e: any) => {
                  handleChange({ name: input.key, value: e.target.iles?.[0] });
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default InputMain;
