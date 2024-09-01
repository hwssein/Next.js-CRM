import { Container, ThemeProvider } from "@mui/material";
import theme from "@/configs/mui";

import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJs CRM Project</title>
        <meta name="author" content="Github:hwssein" />
        <meta charSet="UTF-8" />
        <meta
          name="keyword"
          content="crm, CRM, kavir crm, next.js project, kavir, hwssein, devcarlo, حسین, نکست, پروژه سی آر ام, پروژه crm, سی آر ام, کویر سی آر ام,  nextjs, GitHub: hwssein"
        />
      </Head>
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
