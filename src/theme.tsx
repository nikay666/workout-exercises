import { createMuiTheme } from "@material-ui/core";
import { blue, green, red } from "@material-ui/core/colors";
import { pink } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: pink[200]
    },
    secondary: {
      main: blue[200]
    },
    success: {
      main: green[300]
    },
    error: {
      main: red[300]
    }
  },
})