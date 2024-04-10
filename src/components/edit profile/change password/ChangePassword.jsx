import { Button, TextInput, Title } from "@mantine/core";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center"
    style={{
        height: '100vh'
    }}
    >
      <div className="d-flex flex-column gap-3"
      style={{
        minHeight: '350px',
        minWidth: '350px'
      }}
      >
        <Title order={3} fw={600}>Change Password</Title>

        <TextInput placeholder="Current password"
        type="password"
        />

        <TextInput placeholder="New password"
        type="password"
        />

        <div className="d-flex justify-content-end">
            <Button size="sm" radius={'md'}>Save changes</Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
