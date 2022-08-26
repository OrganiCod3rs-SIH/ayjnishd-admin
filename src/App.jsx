import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import "./App.css";
import CiData from "./components/CiData.jsx/CiData";
import Feedback from "./components/Feedback";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Ci Data", "ci-data", <PieChartOutlined />),
  getItem("Feedback", "feedback", <DesktopOutlined />),
];

console.log(items);

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currPage, setCurrPage] = useState("ci-data");
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["ci-data"]}
          mode="inline"
          items={items}
          onSelect={({ key }) => {
            console.log(key);
            setCurrPage(key);
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {currPage === "ci-data" ? <CiData /> : <Feedback />}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          A admin portal for AYIJNISH
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
