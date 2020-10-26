module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },
    "@storybook/addon-viewport",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-backgrounds"
  ],
};
