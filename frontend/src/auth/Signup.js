import React from "react";
import { Form, Input, Button, Alert, Spin } from "antd";
import { useAuth } from "../context/AuthContext";
import Layout from "../core/Layout";

function Signup() {
  const { signUp, error, loading } = useAuth();

  const handleFinish = (values) => {
    signUp(values); // values will contain name, email, and password
  };

  return (
    <Layout
      title="Signup"
      description="Signup to Node React E-Commerce App"
      className="container col-md-8 offset-md-2"
    >
      {error && <Alert message={error} type="error" showIcon />}
      {loading && (
        <div className="text-center my-3">
          <Spin size="large" />
        </div>
      )}
      <Form
        name="signup"
        onFinish={handleFinish}
        layout="vertical"
        style={{ maxWidth: "400px", margin: "0 auto" }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

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
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

export default Signup;
