import { Button } from "react-bootstrap";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "Bootstrap",
  component: Button,
  parameters: { docs: { component: "Button" } },
} as Meta;

export const _Button = () => (
<>
  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
</>
)