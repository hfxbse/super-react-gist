/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/*.mdx", 
    "../src/**/*.mdx", 
    "../src/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/blocks",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
