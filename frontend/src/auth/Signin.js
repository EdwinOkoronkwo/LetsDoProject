import React from "react";
import { Form, Input, Button, Alert, Spin } from "antd";
import { useAuth } from "../context/AuthContext";
import Layout from "../core/Layout";

function Signin() {
  const { signIn, error, loading } = useAuth();

  const handleFinish = (values) => {
    signIn(values); // values will contain email and password
  };

  return (
    <Layout
      title="Signin"
      description="Signin to Node React E-Commerce App"
      className="container col-md-8 offset-md-2"
    >
      {error && <Alert message={error} type="error" showIcon />}
      {loading && (
        <div className="text-center my-3">
          <Spin size="large" />
        </div>
      )}
      <Form
        name="signin"
        onFinish={handleFinish}
        layout="vertical"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default Signin;
