import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "90px",
          boxSizing: "border-box",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px",
            backgroundColor: "#000000",
            color: "white",
          }}
        >
          <div>로고</div>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <div>로그인</div>
            <div>회원가입</div>
          </div>
        </header>
        <Outlet />
        <footer
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            padding: "24px",
            backgroundColor: "#EEEEEE",
            color: "black",
          }}
        >
          <div>문의하기</div>
          <div>SNS 채널들</div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
