import axios from "axios";
import { useEffect, useState } from "react";
import { Space, Table, Tag, Button } from "antd";
import "../../App.css";

const CiData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://ayjnishd-backend-sih.herokuapp.com/ci").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h2>CI Application</h2>
      <div>
        <table id="customers">
          <tr>
            <th className="">Name</th>
            <th className="">Age</th>
            <th className="">State</th>
            <th className="">Degree of Hearing loss</th>
            <th className="">Type</th>
            <th className="">UUID</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td className="">{item.name}</td>
              <td className="">{item.age}</td>
              <td className="">{item.state}</td>
              <td className="">{item.degree}</td>
              <td className="">{item.type}</td>
              <td className="">{item.id}</td>
              <Button type="primary">Proceed</Button>
              <Button type="primary" danger>
                Decline
              </Button>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CiData;
