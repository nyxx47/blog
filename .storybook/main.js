module.exports = {
    stories: ['../components/**/*.stories.(js|mdx)'],
    addons: [
        '@storybook/addon-knobs/register',
        {
          name: '@storybook/addon-docs',
          options: {
            configureJSX: true,
          },
        },
      ],
};