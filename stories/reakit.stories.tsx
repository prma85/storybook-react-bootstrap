import { Button } from "reakit";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "Reakit",
  component: Button,
  parameters: { docs: { component: "Button" } },
} as Meta;

export const _Button = () => (
  <>
    <Button>Button</Button>
    <Button disabled>Button (disabled)</Button>
  </>
);
