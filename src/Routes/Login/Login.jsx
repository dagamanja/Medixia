import { Button, Card, Checkbox, Form, Input } from "antd";
import React, { useContext } from "react";
import Logo from "../../assets/Medexia_Logo-removebg-preview.png";
import { AuthContext } from "../../contexts/authContext";

export const Login = () => {
  const { loginFun } = useContext(AuthContext);

  const onFinish = (values) => {
    console.log("Success:", values);
    loginFun(values.username, values.password);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card
        title={
          <>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                gap: "1em",
              }}
            >
              <img src={Logo} alt="Logo Medexia" style={{ height: "5em" }} />
              <h1 style={{ fontSize: "3em", fontFamily: "monospace" }}>
                Medexia
              </h1>
            </div>
          </>
        }
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Usuario"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/* 
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Iniciar Sesión</Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
