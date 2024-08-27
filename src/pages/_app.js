import { Container, ThemeProvider } from "@mui/material";
import theme from "@/configs/mui";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
