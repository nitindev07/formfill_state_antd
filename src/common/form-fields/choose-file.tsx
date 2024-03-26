import React from 'react';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

interface Props {
  label?:string,
  isRequired?: boolean;
  onChange?:(file:any)=>void;
}

const ChooseFile: React.FC<Props> = ({ label,isRequired,onChange }) => {
  const dummyRequest = async ({ file, onSuccess }:any) => {    
    setTimeout(() => {
       onSuccess("ok");
    }, 0);
  }
  const props: UploadProps = {
    name: 'file',
  customRequest: dummyRequest,

    onChange(info:any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        onChange && onChange(info.file)
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      {label && (
        <label className="text-[#333333] opacity-70  font-semibold text-[14px]" htmlFor="">
          {label}{" "}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}
      <div className='border w-full rounded-[8px] max-h-[full] flex items-center border-[#333333]/20 hover:border-blue-500 px-3 py-1'>
        <Upload {...props}>
      <Button>Choose File</Button>
    </Upload>
      </div>
      
    </div>
    
  );
};

export default ChooseFile;
