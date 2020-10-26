import 'bootstrap/dist/css/bootstrap.min.css';
import "./storybook.css";
import "@storybook/addon-console";

import { setConsoleOptions, withConsole } from "@storybook/addon-console";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";

// HRM messages
setConsoleOptions({
  panelExclude: [],
});

// console messages origin
addDecorator((storyFn, context) => withConsole()(storyFn)(context));



// Export global parameters
export const parameters = {
  viewport: {
    viewports: {...INITIAL_VIEWPORTS },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
};
