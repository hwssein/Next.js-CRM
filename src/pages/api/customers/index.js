import Customer from "@/models/customerModel";
import connectDB from "@/utils/connectDB";

const handler = async (req, res) => {
  await connectDB();

  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.lastName || !data.email || !data.phone) {
      res.status(400).json({ status: "failed", message: "Invalid Data" });
      return;
    }

    try {
      const customer = await Customer.create(data);

      res.status(201).json({
        status: "success",
        message: "Customer Created",
        data: customer,
      });
    } catch (error) {
      console.log("Can Not Create Data In DB\n", error);
      res
        .status(500)
        .json({ status: "failed", message: "Can Not Create Data" });
    }
  } else if (req.method === "GET") {
    try {
      const customerData = await Customer.find();

      res.status(200).json({ status: "success", data: customerData });
    } catch (error) {
      console.log("Can Not Get Customers\n", error);
      res
        .status(500)
        .json({ status: "failed", message: "Unable To Get Customers Data" });
    }
  } else if (req.method === "DELETE") {
    try {
      const id = req.body;

      const deleteCustomer = await Customer.findByIdAndDelete({ _id: id });
      res.status(200).json({
        status: "success",
        message: "Customer Removed",
        data: deleteCustomer,
      });
    } catch (error) {
      console.log("Cant Remove Customer\n", error);
      res
        .status(500)
        .json({ status: "failed", message: "Cant Remove Customer" });
    }
  }
};

export default handler;
