import axios from "axios";
import { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import "../App.css";

const Feedback = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://ayjnishd-backend-sih.herokuapp.com/feedback")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <h2>Feedback</h2>
      <div>
        <table id="customers">
          <tr>
            <th className="">Name</th>
            <th className="">Feedback</th>
            <th className="">Email</th>
            <th className="">Number</th>
            <th className="">Case No</th>
            <th className="">Improvement</th>
            <th className="">Suggestion</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td className="">{item.name}</td>
              <td className="">{item.feedback}</td>
              <td className="">{item.email}</td>
              <td className="">{item.contact_no}</td>
              <td className="">{item.case_no}</td>
              <td className="">{item.improvement}</td>
              <td className="">{item.suggestion}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Feedback;
// import { Space, Table, Tag } from "antd";
// import React from "react";
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
// ];
// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

// const App = () => <Table columns={columns} dataSource={data} />;

// export default App;
