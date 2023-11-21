import type { ComponentProps } from "react";
import type { Meta, StoryFn } from "@storybook/react";

// import { userEvent, within } from '@storybook/testing-library';
import Button from ".";

export default {
  component: Button,
  title: "Atoms/Button",
  parameters: {
    darkMode: {
      // Set the initial theme
      current: "light",
    },
  },
  args: {
    children: "Submit",
    color: "primary",
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary"],
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
