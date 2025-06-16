// Font imports to ensure they're included in the build
import MuseoSans300 from './MuseoSans-300.otf?url'
import MuseoSans500 from './MuseoSans_500.otf?url'

export const fonts = {
  MuseoSans300,
  MuseoSans500,
}

// Inject font faces into the document
const injectFonts = () => {
  const style = document.createElement('style')
  style.textContent = `
    @font-face {
      font-family: 'MuseoSans';
      src: url('${MuseoSans300}') format('opentype');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'MuseoSans';
      src: url('${MuseoSans500}') format('opentype');
      font-weight: 500;
      font-style: normal;
    }
  `
  document.head.appendChild(style)
}

export default injectFonts 