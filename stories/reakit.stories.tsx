import { Provider, Button } from "reakit";
import * as system from "reakit-system-bootstrap";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import Center from "../util/center";

export default {
  title: "Reakit",
  component: Button,
  decorators: [
    Story => (
      <Provider unstable_system={system}>
        <Center>
          <Story />
        </Center>
      </Provider>
    ),
  ],
  parameters: { docs: { component: "Button" } },
} as Meta;

export const _Button = () => (
  <>
    <Button>Button</Button>
    <Button disabled>Button (disabled)</Button>
  </>
);
