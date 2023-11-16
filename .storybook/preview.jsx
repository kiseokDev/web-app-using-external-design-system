/** @type { import('@storybook/react').Preview } */

import { global as designSystemGlobal } from '@dev.leekiseok/elice-storybook/dist';

// The styles imported from the design system.

const { GlobalStyle } = designSystemGlobal;

/*
 * Adds a global decorator to include the imported styles from the design system.
 * More on Storybook decorators at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
    (Story) => (
        <>
            <GlobalStyle />
            <Story />
        </>
    ),
];
/*
 * More on Storybook parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 */
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    // Storybook a11y addon configuration
    a11y: {
        // the target DOM element
        element: '#root',
        // sets the execution mode for the addon
        manual: false,
    },
};
