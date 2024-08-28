import { useState } from "react";
import { useRouter } from "next/router";

import Form from "../modules/Form";

import { Box, Button, Typography } from "@mui/material";

function AddCustomerPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    products: [],
  });

  const saveHandler = async () => {
    const phoneRegex = /^09\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!phoneRegex.test(form.phone))
      return alert("Please Enter Valid Phone Number");

    if (!emailRegex.test(form.email)) return alert("Please Enter Valid Email");

    const req = await fetch("/api/customers", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-type": "application/json" },
    });

    const res = await req.json();

    if (res.status === "success") {
      router.push("/");
    } else {
      alert("The New Customer Could Not Be Saved");
    }
  };

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      date: "",
      products: [],
    });

    router.push("/");
  };

  return (
    <>
      <Typography
        component="h6"
        variant="h6"
        color="primary"
        fontWeight="bold"
        my={2}
      >
        Add Customer
      </Typography>

      <Form form={form} setForm={setForm} />

      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "row, nowrap",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "24px 0",
        }}
      >
        <Button
          variant="contained"
          size="small"
          color="error"
          sx={{ width: "100px" }}
          onClick={cancelHandler}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          size="small"
          color="success"
          sx={{ width: "100px" }}
          onClick={saveHandler}
        >
          Save
        </Button>
      </Box>
    </>
  );
}

export default AddCustomerPage;
