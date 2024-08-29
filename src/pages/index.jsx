import GetCustomersPage from "@/components/template/GetCustomersPage";
import Customer from "@/models/customerModel";
import connectDB from "@/utils/connectDB";

function HomePage({ data }) {
  return (
    <>
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
