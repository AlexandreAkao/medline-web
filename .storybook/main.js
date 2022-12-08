const { mergeConfig, loadConfigFromFile } = require('vite');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const react = require('@vitejs/plugin-react');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '..', '.env.test'),
});

module.exports = {
  framework: "@storybook/react",
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    // "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "storybook-addon-mock/register"
  ],
  core: {
    builder: "@storybook/builder-vite"
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '..', 'vite.config.ts'),
    );

    const storybookPlugins = config.plugins;
    config.plugins = [];

    return mergeConfig(config, {
      ...userConfig,
      define: {
        ...config.define,
        global: "window",
      },
      plugins: [
        ...storybookPlugins.filter((plugin) => !(Array.isArray(plugin) && plugin[0].name === 'vite:react-babel')),
        react(),
        tsconfigPaths({
          projects: [path.resolve(__dirname, "..", "tsconfig.json")],
        }),
      ]
    });
  },
}
