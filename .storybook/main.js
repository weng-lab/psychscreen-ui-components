module.exports = {
  addons: ['@storybook/addon-essentials'],
  babel: async options => ({
    // Update your babel configuration here
    ...options
  }),
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  webpackFinal: async (config, {
    configType
  }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
  docs: {
    autodocs: true
  }
};