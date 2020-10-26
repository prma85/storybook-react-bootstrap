import "antd/dist/antd.css";
import { Button } from "antd";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";

import Center from "../util/center";

export default {
  title: "Ant Design",
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
      <Button type="primary">Primary Button</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
    </div>
    <div>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
    <div>
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
      <Button danger type="text">
        Danger Text
      </Button>
    </div>
    <div
      style={{ padding: "8px 8px 0 8px", background: "rgb(190, 200, 200)", display: "inline-block", height: "46px" }}
    >
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>
);
