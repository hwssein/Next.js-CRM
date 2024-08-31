import CustomerDetails from "@/components/template/CustomerDetails";
import Customer from "@/models/customerModel";

function CustomerId({ data }) {
  return (
    <>
      <CustomerDetails data={data} />
    </>
  );
}

const getServerSideProps = async (context) => {
  const {
    params: { customerId },
  } = context;

  const customerData = await Customer.findById({ _id: customerId });

  return {
    props: {
      data: JSON.parse(JSON.stringify(customerData)),
    },
  };
};

export default CustomerId;
export { getServerSideProps };
