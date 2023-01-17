import React from "react";
import Footer from "./footer";
import HeaderLand from "./headerLand";
import "./userPages.css";

import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name of sender",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name of receiver",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "sender Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "date of transaction",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    amount: 123,
    date: "07/01/2022",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    amount: 123,
    date: "07/01/2022",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    amount: 123,
    date: "07/01/2022",
  },
];

function UserPage() {
  return (
    <div>
      <HeaderLand />
      <div className="userContainer">
        <div className="userContent">
          <h2 style={{ textAlign: "center" }}>Detail of my transaction</h2>
          <Table
            columns={columns}
            dataSource={data}
            style={{ marginTop: "40px" }}
          />
          ;
        </div>
        <div className="contentTwo"></div>
      </div>
      <Footer />
    </div>
  );
}

export default UserPage;
