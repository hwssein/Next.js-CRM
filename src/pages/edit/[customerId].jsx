import EditCustomerPage from "@/components/template/EditCustomerPage";
import Customer from "@/models/customerModel";

function Edit({ data }) {
  return (
    <>
      <EditCustomerPage data={data} />
    </>
  );
}

const getServerSideProps = async (context) => {
  const { params } = context;
  const { customerId } = params;

  const data = await Customer.findById({ _id: customerId });

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default Edit;

export { getServerSideProps };
