import { Outlet } from "react-router-dom";
import React, { useContext, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;
import { Navbar } from "./Navbar/Navbar";
import "./layoutPage.css";
import { AuthContext } from "../contexts/authContext";

export const LayoutPage = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Layout className="LayoutContainer">
        <Layout
          className={isLoggedIn ? "OutletContainer-left" : "OutletContainer"}
        >
          {isLoggedIn ? <Navbar /> : <></>}

          <Content className="OutletContent">
            <Outlet className="Outlet" />
          </Content>
          {/* <Spin
            // spinning={loading}
            style={{
              position: "absolute",
              margin: "auto",
              // background: "red",
            }}
            fullscreen
          /> */}
        </Layout>
      </Layout>
      {/* <Footer>
        <div>
          <p>Molaris Copyright © 2024</p>
        </div>
      </Footer> */}
    </>
  );
};
