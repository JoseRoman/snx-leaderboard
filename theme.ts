import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"


// 2. Add your color mode config
/* const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  body
}
*/
// 3. extend the theme
//const theme = extendTheme({ config })

const overrides = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: "white",
        background: "linear-gradient(189deg, rgba(26,0,45,1) 35%, rgb(26 0 45 / 70%) 100%),url(/static/synth-retrowave-synthwave-fon-new-retro-wave-sintveiv-ret-15.jpg)",

        lineHeight: "base",
      },
      th: {
        color: "rgb(1 208 253) !important"
      },
      label: {
        color: "rgb(1 208 253) !important"
      }
    }),
  },
})

export default overrides