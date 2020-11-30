import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#e12",
    },
    teritary: {
      main: "#e33",
    },
  },
});
export default theme;