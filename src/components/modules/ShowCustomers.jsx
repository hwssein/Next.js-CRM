import { useRouter } from "next/router";

import Link from "next/link";

import { Box, Button, Typography } from "@mui/material";

function ShowCustomers({ data }) {
  const router = useRouter();
  const deleteHandler = async (id) => {
    const ok = confirm("Are You Sure to Delete?");

    if (!ok) return;

    const req = await fetch("/api/customers", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: { "Content-type": "application/json" },
    });
    const res = await req.json();

    if (res.status === "success") router.reload();
  };

  return (
    <>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "8px",
          backgroundColor: "var(--secondary)",
          padding: "10px 8px",
          borderRadius: "4px",
          rowGap: "16px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "8px",
          }}
        >
          <Typography component="p" variant="h6" fontWeight="bold">
            {data.name}
          </Typography>

          <Typography component="p" variant="h6" fontWeight="bold">
            {data.lastName}
          </Typography>
        </Box>

        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => deleteHandler(data._id)}
          >
            Remove
          </Button>

          <Link href={`/edit/${data._id}`}>
            <Button variant="contained" size="small" color="warning">
              Edit
            </Button>
          </Link>

          <Link href={`/customer/${data._id}`}>
            <Button variant="contained" size="small" color="success">
              Details
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default ShowCustomers;
