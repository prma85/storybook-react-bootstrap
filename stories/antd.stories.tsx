import { Button } from "antd";
import { Meta } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "Ant Design",
  component: Button,
  parameters: { docs: { component: "Button" } },
} as Meta;

export const _Button = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <Button type="link">Link Button</Button>
    <Button danger>Danger Default</Button>
    <Button danger disabled>
      Danger Default(disabled)
    </Button>
    <Button danger type="text">
      Danger Text
    </Button>
    <div className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>
);
