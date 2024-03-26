import React, { useEffect, useState } from "react";
import { Modal as Mod } from "antd";
import Button from "../partial/button";
import { jobPositionInputs as input } from "../../constant/input-constant";
import InputMain from "../form-fields/input-main";

const Modal = ({
  isOpen, onSubmit, onClose, selectedData }: any) => {
    const handleClose = () => {
      onClose();
      setInputValues({});
    };
    const handleChange = (e: any) => {
      const { name, value } = e;
      setInputValues((prev: any) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      const isRequiredFilled = input.every((input) => {
        if (input.required) {
          return !!inputValues[input.key];
        }
        return true;
      });
  
      if (isRequiredFilled) {
        onSubmit(inputValues);
        handleClose();
      } else {
        alert("Please fill in all required fields.");
      }
    };
  
    const [inputValues, setInputValues] = useState(
      selectedData
        ? selectedData
        : input.reduce((acc: any, obj) => {
            acc[obj.key] = obj.value;
            return acc;
          }, {})
    );
  
    useEffect(() => {
      if (selectedData) {
        setInputValues(selectedData);
      }
    }, [selectedData]);
  return (
    <Mod
      footer={null}
      open={isOpen}
      onOk={handleSubmit}
      onCancel={handleClose}
    >
      <div>
        <div className="border-b-2 w-full mb-6">
          <h1 className="text-[#333333] opacity-70 font-semibold text-[14px] pb-3">
            Fill Form
          </h1>
        </div>
        <div>
          <InputMain
            input={input}
            values={inputValues}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="flex gap-[20px] justify-end mt-[30px]">
        <Button onClick={handleClose} className="w-[120px]" state="primary">
          cancle
        </Button>
        <Button
          onClick={handleSubmit}
          className="w-[120px]"
          type="filled"
          state="primary"
        >
          submit
        </Button>
      </div>
    </Mod>
  );
};

export default Modal;
