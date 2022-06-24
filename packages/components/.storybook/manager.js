import '@storybook/addon-docs/register'
import '@storybook/addon-knobs/register'
import { create, themes } from '@storybook/theming'
import { addons } from '@storybook/addons'
import {sbTheme} from './theme'
import {useDarkMode} from 'storybook-dark-mode'

const dark = false;

const selectedTheme = dark ? sbTheme.dark : sbTheme.light

const cssText = [
  `.sbdocs { 
      font-family: ${selectedTheme.fontBase} !important;
    }
    .sbdocs .sbdocs-title { 
      font-family: ${selectedTheme.fontBase} !important;
    }import { useDarkMode } from 'storybook-dark-mode';

  `,
].join('\n')

function injectStyleTag() {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.id = `sbdocs-override`

  if ((style).styleSheet) {
    ;(style).styleSheet.cssText = cssText
  } else {
    style.appendChild(document.createTextNode(cssText))
  }

  if (document.head) document.head.appendChild(style)
}

injectStyleTag()
export const storybookTheme = create(selectedTheme)

addons.setConfig({
  theme: storybookTheme,
})
