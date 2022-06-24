export * from './Luckybones/Luckybones'
export * from './NunitoSans/NunitoSans'
export * from './FiraCode/FiraCode'

const cssText = [
  `html {
    /* 10px */
    font-size: 62.5%;
  }
  
  body {
    /* 16px */
    font-size: 1.6rem;
  }`,
].join('\n')

function injectStyleTag() {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.id = `font-reset`

  if (style.styleSheet) {
    style.styleSheet.cssText = cssText
  } else {
    style.appendChild(document.createTextNode(cssText))
  }

  if (document.head) document.head.appendChild(style)
}

injectStyleTag()
