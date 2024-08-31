import { Box, Divider, Grid2, Typography } from "@mui/material";

function CustomerDetails({ data }) {
  console.log(data);
  return (
    <>
      <Typography
        component="h6"
        variant="h6"
        color="primary"
        fontWeight="bold"
        my={2}
      >
        Customer Details
      </Typography>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "var(--secondary)",
          padding: "8px",
          borderRadius: "4px",
          marginBottom: "8px",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "fle-start",
        }}
      >
        <Typography component="span" variant="span" padding={1}>
          {data.name}
        </Typography>
        <Typography component="span" variant="span" padding={1}>
          {data.lastName}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "var(--secondary)",
          padding: "8px",
          borderRadius: "4px",
          marginBottom: "8px",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="span" variant="span" padding={1}>
          {data.phone}
        </Typography>
        <Typography component="span" variant="span" padding={1}>
          {data.email}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "var(--secondary)",
          padding: "8px",
          borderRadius: "4px",
          marginBottom: "8px",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "fle-start",
        }}
      >
        <Typography component="span" variant="span" padding={1}>
          Address:
        </Typography>
        <Typography component="span" variant="span" padding={1}>
          {data.address}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "var(--secondary)",
          padding: "8px",
          borderRadius: "4px",
          marginBottom: "8px",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "fle-start",
        }}
      >
        <Grid2 container spacing={2} sx={{ width: "100%" }}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Typography component="span" variant="span" padding={1}>
              Created At:
            </Typography>
            <Typography component="span" variant="span" padding={1}>
              {data.createdAt.split("T")[0]}
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Typography component="span" variant="span" padding={1}>
              Updated At:
            </Typography>
            <Typography component="span" variant="span" padding={1}>
              {data.updatedAt.split("T")[0]}
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Typography component="span" variant="span" padding={1}>
              Date:
            </Typography>
            <Typography component="span" variant="span" padding={1}>
              {data.date.split("T")[0]}
            </Typography>
          </Grid2>
        </Grid2>
      </Box>

      <Typography component="p" variant="p" color="primary" mb={1} mt={2}>
        Purchase Product
      </Typography>

      <Grid2
        container
        spacing={1}
        sx={{
          width: "100%",
          backgroundColor: "var(--secondary)",
          borderRadius: "4px",
          marginBottom: "8px",
          padding: "8px",
        }}
      >
        {data.products.length ? (
          data.products.map((item) => (
            <>
              <Grid2
                key={item.id}
                size={{ xs: 12, sm: 6 }}
                sx={{ width: "100%" }}
              >
                <Box component="div" sx={{ width: "100%" }}>
                  <Typography component="span" variant="span" padding={1}>
                    Name:
                  </Typography>
                  <Typography component="span" variant="span">
                    {item.name}
                  </Typography>
                </Box>
              </Grid2>

              <Grid2 key={item.id} size={{ xs: 12, sm: 6 }}>
                <Box component="div" sx={{ width: "100%" }}>
                  <Typography component="span" variant="span" padding={1}>
                    Price:
                  </Typography>
                  <Typography component="span" variant="span">
                    {item.price}$
                  </Typography>
                </Box>
              </Grid2>

              <Grid2 key={item.id} size={{ xs: 12, sm: 6 }}>
                <Box component="div" sx={{ width: "100%" }}>
                  <Typography component="span" variant="span" padding={1}>
                    Quantity:
                  </Typography>
                  <Typography component="span" variant="span">
                    {item.QTY}
                  </Typography>
                </Box>
              </Grid2>
              <Divider sx={{ width: "100%", margin: "8px 0" }} />
            </>
          ))
        ) : (
          <Typography
            component="span"
            variant="span"
            textAlign="center"
            sx={{ width: "100%" }}
          >
            No Purchase Products
          </Typography>
        )}
      </Grid2>
    </>
  );
}

export default CustomerDetails;
