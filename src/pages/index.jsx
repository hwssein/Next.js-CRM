import GetCustomersPage from "@/components/template/GetCustomersPage";
import Customer from "@/models/customerModel";
import connectDB from "@/utils/connectDB";
import Head from "next/head";

function HomePage({ data }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="The Next.js CRM project Developed By hwssein | GitHub: hwssein"
        />
      </Head>
      <GetCustomersPage data={data} />
    </>
  );
}

export default HomePage;

const getServerSideProps = async () => {
  await connectDB();
  try {
    const customersData = await Customer.find();

    return {
      props: {
        data: JSON.parse(JSON.stringify(customersData)),
      },
    };
  } catch (error) {
    console.log(error);
    return;
  }
};

export { getServerSideProps };
