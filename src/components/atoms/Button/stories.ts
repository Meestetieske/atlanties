import { composeStories } from "@storybook/react";

import * as stories from "./Button.stories";
export const { Default } = composeStories(stories);
