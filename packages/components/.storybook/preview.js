import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'
import { AppProviders } from '../src/AppProviders'

import { NativeBaseProvider, theme } from '../src/libs/native-base'
import { Text, Link, Heading, View } from 'native-base'
import Wrapper, { myTheme } from '../src/Wrapper'

import { compareStoryPaths } from './sort'
import { storybookTheme } from './manager'
import { withKnobs } from '@storybook/addon-knobs'
import { themes } from '@storybook/theming'

import { sbTheme } from './theme'
import { useDarkMode } from 'storybook-dark-mode';


// const dark = true;

// addDecorator()

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: sbTheme.dark,
    // Override the default light theme
    light: sbTheme.light,
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  docs: {
    source: { format: false },
    inlineStories: true,
    container: ({ children, context }) => (
      <Wrapper theme={myTheme}>
        <DocsContainer context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: useDarkMode() ? sbTheme.dark : sbTheme.light,
              },
            },
          };
        },
      }}>{children}</DocsContainer>
      </Wrapper>
    ),
    // container: DocsContainer,
    page: DocsPage,
    components: {
      // h1: ({ children }) => <Text fontSize="4xl" fontWeight={900}>{children}</Text>, // ComponentName
      // h2: ({ children, context }) => <Text fontSize="lg">{children}</Text>,
      // h3: ({ children, context }) => <Heading fontSize="md">{children}</Heading>,
      // li: AnchorListItem,
      // a: Link,
      // p: Text,
      // Tip,
      // ComponentRules,
      // UsageGuidelines,
      // FunctionArguments,
      // FunctionArgument,
      // RelatedComponents
    },
  },
  viewMode: 'docs',
  options: {
    showRoots: true,
    // storySort: {
    //   method: 'alphabetical',
    //   order: [
    //     'Getting started',
    //     'Principles',
    //     'Guides',
    //     'Styles',
    //     'Layout',
    //     'Buttons',
    //     'Forms',
    //     'Overlay',
    //     'Media',
    //     'Components',
    //     '*',
    //     ['Factory',
    //     'Change Log',
    //     'Icon',
    //     'React Hook Form',
    //     'Transitions'],
    //   ], 
    //   locales: '', 
    // }
    // storySort: (previous, next) => {
    //   const [previousStory, previousMeta] = previous
    //   const [nextStory, nextMeta] = next

    //   return anysort(previousMeta.kind, nextMeta.kind, [
    //     'Getting started/**',
    //         'Principles/**',
    //         'Guides/**',
    //         'Styles/**',
    //         'Layout/**',
    //         'Buttons/**',
    //         'Forms/**',
    //         'Overlay/**',
    //         'Media/**',
    //         'Components/**',
    //         '/**',
    //         // 'Factory',
    //         // 'Change Log',
    //         // 'Icon',
    //         // 'React Hook Form',
    //         // 'Transitions',
    //   ])
    // }
    storySort: ([story1Id, story1], [story2Id, story2]) => {
      // Note: keys must be in all lowercase
      const storiesOrder = {
        'getting started': {
          introduction: null,
        },
        'getting started': {
          introduction: null,
        },
        principles: {
          'simple, robust and personal': null,
        },
        guides: {
          accessibility: null,
        },
        styles: {
          box: null,
          center: null,
          container: null,
          flex: null,
          hstack: null,
          stack: null,
          vstack: null,
          zstack: null,
        },
        layout: {
          stacks: null,
          boxes: null,
          simplegrid: null,
          hidden: null,
        },
        buttons: null,
        forms: null,
        overlay: null,
        media: null,
        components: {
          badge: null,
          bars: null,
          expanders: null,
          lists: null,
          loading: null,
          media: null,
          modal: null,
          progress: null,
          typography: null,
          views: null,
          //---------------//
          // 'date input': null, // NOT IMPLEMENTED BUT NOT REQUIRED?
          // 'date picker': null, // NOT IMPLEMENTED BUT REQUIRED - USE https://github.com/react-native-datetimepicker/datetimepicker
          // 'file upload': null, // NOT IMPLEMENTED BUT REQUIRED
          // 'inset text': null, // NOT IMPLEMENTED BUT NOT REQUIRED?
          // 'logo': null, // NOT IMPLEMENTED BUT NOT REQUIRED?
          // 'middle': null, // NOT IMPLEMENTED BUT COULD BE DECENT
          // 'panel': null, // NOT IMPLEMENTED BUT COULD BE USEFUL TO CREATE-  https://docs.nativebase.io/next/migration/card#page-title
          // 'srtext': null, // NOT IMPLEMENTED BUT COULD BE DECENT
          // 'stepper': null, // Not implemented but nearest is NumberInput - Steps
          // 'table': null,  // NOT IMPLEMENTED BUT COULD BE DECENT
          // 'tabs': null, // NOT IMPLEMENTED BUT REQUIRED? - USE https://docs.nativebase.io/next/migration/tabs#page-title
        },
        'factory': null,
        'change log': null
      }

      const story1Path = [...story1.kind.split('/'), story1.name].map((key) =>
        key.toLowerCase(),
      )
      const story2Path = [...story2.kind.split('/'), story2.name].map((key) =>
        key.toLowerCase(),
      )

      // console.log(storiesOrder, story1Path, story2Path)
      return compareStoryPaths(storiesOrder, story1Path, story2Path)
    },
  },
}

export const decorators = [(storyFn) => <Wrapper theme={myTheme}>{storyFn()}</Wrapper>]
