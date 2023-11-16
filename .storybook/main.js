/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    refs: {
        'design-system': {
            title: 'My design system',
            //👇 The url provided by Chromatic when it was deployed
            // url: 'https://your-published-url.chromatic.com',
            url: 'https://6552e91ed69dbda616e90d9d-yroquwyctx.chromatic.com',
        },
    },
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    // staticDirs: ['../public'],
};

export default config;
