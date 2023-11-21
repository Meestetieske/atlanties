/** @type { import('@storybook/react').Preview } */
import "../src/tailwind.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="text-text">
        <Story />
      </div>
    ),
  ],
};

export default preview;
