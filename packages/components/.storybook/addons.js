import "@storybook/addon-docs/register";
// import "@storybook/addon-interactions/register";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";
import logo from "./logo.svg";

const theme = create({
  base: "light",
  brandImage: logo,
  brandUrl: "https://elsewhere.design",
  barSelectedColor: "#5034ff",
  brandTitle: "Elsewhere Design System",
  background: {
    hoverable: "rgba(80, 52, 255, 0.1)"
  },
  hoverable: "rgba(80, 52, 255, 0.1)"
});

addons.setConfig({
  theme
});
