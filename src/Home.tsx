import React, { useState } from "react";
import Button from "./common/partial/button";
import Table from "./common/table/table";
import { FaRegEdit } from "react-icons/fa";
import Header from "./common/header/header";
import { FaPlus } from "react-icons/fa6";
import Modal from "./common/modal/modal";

type Props = {};
interface DataType {
  key: React.Key;
  title: string;
  code: Number;
  description: string;
  status: boolean;
  profileImage:any
}

function JobPosition(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedData(undefined);
  };
  const handleOpenModal = (record?: any) => {
    setIsOpen(true);
    record && setSelectedData(record);
  };
  const [selectedData, setSelectedData] = useState(undefined);
  const handleSubmit = (newData: any) => {
    const dataIndex = dataSource.findIndex(
      (item) => item.code === newData.code
    );

    if (dataIndex !== -1) {
      const updatedDataSource = [...dataSource];
      updatedDataSource[dataIndex] = newData;
      setDataSource(updatedDataSource);
    } else {
      setDataSource((prevDataSource) => [...prevDataSource, newData]);
    }
    handleCloseModal();
  };
  const handleDelete = (record: DataType) => {
    setDataSource(prevDataSource =>
      prevDataSource.filter(employee => employee.code !== record.code)
    );
  };
  
  const [dataSource, setDataSource] = useState<DataType[]> ([]);


  const columns = [
    {
      title: "Profile",
      render: (record: DataType) => (
        <div>
          <img src={record.profileImage} alt="Profile" />
        </div>
      ),
    },
    
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: DataType, b: DataType) => a.title.localeCompare(b.title),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      sorter: (a: DataType, b: DataType) => Number(a.code) - Number(b.code),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      render: (record: DataType) => (
        <div>
          <Button
            state="primary"
            className="border"
            onClick={() => {
              handleOpenModal(record);
            }}
          >
            <div className="flex gap-2 items-center">
              <FaRegEdit size={17} />
            </div>
          </Button>
          <Button
            state="primary"
            className="border"
            onClick={() => {
              handleDelete(record);
            }}
          >
            <div className="flex gap-2 items-center">
              <FaRegEdit size={17} />
            </div>
          </Button>
        </div>
      ),
    },
  ];
  console.log(dataSource);
  
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        selectedData={selectedData}

      />
      <Header
        heading="Employees"
        icon={<FaPlus />}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />
      <div className="mt-6 flex flex-col items-end">
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

export default JobPosition;
