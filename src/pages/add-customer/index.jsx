import AddCustomerPage from "@/components/template/AddCustomerPage";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The Next.js CRM project Developed By hwssein, Add Customer Page | GitHub: hwssein "
        />
      </Head>
      <AddCustomerPage />
    </>
  );
}

export default Index;
