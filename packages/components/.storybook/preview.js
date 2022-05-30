import React from "react"
import { parameters } from "@storybook/addon-docs/dist/frameworks/react/config";
import { addParameters, addDecorator } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import {NativeBaseProvider} from 'native-base'
// import {
//   SectionName,
//   Title,
//   Tip,
//   AnchorListItem,
//   ComponentRules,
//   ComponentName,
//   UsageGuidelines,
//   FunctionArguments,
//   FunctionArgument,
//   RelatedComponents,
//   DocFooter,
//   MultipleStoryElementsWrapper,
//   Paragraph,
//   LinkComponent
// } from "../src/storybook/components";
import styled from 'styled-components/native'

export const StoryContainer = styled.View`
  height: 100vh;
  width: 100vw;
`

addParameters({
  controls: {
    expanded: true,
    sort: "requiredFirst"
  },
  docs: {
    // ...parameters.docs,
    inlineStories: true,
    container: DocsContainer,
    page: DocsPage,
    // components: {
    //   h1: ComponentName,
    //   h2: SectionName,
    //   h3: Title,
    //   li: AnchorListItem,
    //   a: LinkComponent,
    //   p: Paragraph,
    //   Tip,
    //   ComponentRules,
    //   UsageGuidelines,
    //   FunctionArguments,
    //   FunctionArgument,
    //   RelatedComponents
    // }
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
    canvas: { title: "Sandbox" }
  },
  themes: {
    default: "Light",
    list: [
      { name: "Light", class: "light-app-them", color: "#ffffff" },
      { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
      { name: "Black", class: "black-app-theme", color: "#111111" },
      { name: "Hacker", class: "hacker_theme-app-theme", color: "#282a36" }
    ]
  },
  options: {
    showRoots: true,
    storySort: (a, b) => {
      // Control root level sort order.
      const sort = [
        "Introduction",
        "Foundations",
        "*",
        "Accessibility",
        "Hooks"
      ];
      const sortObj = {};

      sort.forEach(function(a, i) {
        sortObj[a] = i + 1;
      });

      const aSplit = a[1].kind.split('/');
      const bSplit = b[1].kind.split('/');

      if (aSplit && bSplit) {
        return (
          sortObj[`${aSplit[0]}/${aSplit[1]}`] -
          sortObj[`${bSplit[0]}/${bSplit[1]}`]
        );
      }

      return a - b;
    }
  }
});

// export const decorators = [
//   (Story, { className }) => {
//     return (
//       <MultipleStoryElementsWrapper className={className}>
//       <div style={{ background:"red", margin: '1rem' }}><Story /></div>
        
//       </MultipleStoryElementsWrapper>
//     );
//   }
// ];
addDecorator(storyFn => (
  <>
    <StoryContainer>{storyFn()}</StoryContainer>
  </>
))
