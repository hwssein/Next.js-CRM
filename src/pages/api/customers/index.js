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
  }
};

export default handler;
