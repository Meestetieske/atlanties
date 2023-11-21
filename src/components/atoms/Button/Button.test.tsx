import { expect, test } from "@playwright/experimental-ct-react";

import Button from ".";

test("render a default button", async ({ mount }) => {
  let clicked = false;
  const testLabel = "Test Label";
  const testOnClick = () => {
    clicked = true;
  };
  const component = await mount(
    <Button onClick={testOnClick}>{testLabel}</Button>
  );

  await expect(component).toBeVisible();
  await expect(component.locator("span")).toHaveText(testLabel);
  await component.click();
  expect(clicked).toBeTruthy();
});
