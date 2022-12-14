import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="type your emails" />,
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
