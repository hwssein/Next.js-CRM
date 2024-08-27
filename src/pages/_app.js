import { Container, ThemeProvider } from "@mui/material";
import theme from "@/configs/mui";

import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ThemeProvider>
    </>
  );
}
