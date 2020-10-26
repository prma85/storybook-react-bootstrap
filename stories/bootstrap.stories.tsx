import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import Center from "../util/center";

export default {
  title: "Bootstrap",
  component: Button,
  decorators: [
    Story => (
      <Center>
        <Story />
      </Center>
    ),
  ],
  parameters: { docs: { component: "Button" } },
} as Meta;

export const _Button = () => (
  <>
    <div>
      <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button> <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </div>
    <div>
      <Button variant="outline-primary">Primary</Button> <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button> <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button> <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button> <Button variant="outline-dark">Dark</Button>
    </div>
  </>
);
