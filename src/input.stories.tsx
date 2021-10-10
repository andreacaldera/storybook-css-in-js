import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Input } from "./input";

const Template: Story<{}> = (args) => <Input {...args} />;

export default {
  title: "Input",
  component: Input,
} as Meta;

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {};
