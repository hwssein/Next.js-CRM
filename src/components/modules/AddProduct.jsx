import {
  Box,
  Button,
  Divider,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

function AddProduct({ form, setForm }) {
  const { products } = form;

  const addItemHandler = () => {
    setForm({
      ...form,
      products: [
        ...products,
        {
          name: "",
          price: "",
          QTY: "",
          id: Math.floor(Math.random() * 1000000),
        },
      ],
    });
  };

  const removeHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  const changeHandler = (event, index) => {
    const { name, value } = event.target;

    const newProducts = [...products];
    newProducts[index][name] = value;

    setForm({ ...form, products: newProducts });
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
          marginTop: "16px",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <Typography
            component="p"
            variant="p"
            color="secondary"
            fontWeight="bold"
          >
            Purchase Products
          </Typography>

          <Button variant="text" onClick={addItemHandler}>
            Add Item
          </Button>
        </Box>

        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {products.map((item, index) => (
            <Grid2 container spacing={2} key={item.id}>
              <Grid2 key={item.id} size={{ xs: 12 }}>
                <TextField
                  type="text"
                  name="name"
                  label="Product Name"
                  value={item.name}
                  onChange={(event) => changeHandler(event, index)}
                  variant="filled"
                  sx={{
                    width: "100%",
                    backgroundColor: "var(--secondary)",
                    borderRadius: "4px",
                  }}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 6 }}>
                <TextField
                  type="number"
                  name="price"
                  label="Price"
                  value={item.price}
                  onChange={(event) => changeHandler(event, index)}
                  variant="filled"
                  sx={{
                    width: "100%",
                    backgroundColor: "var(--secondary)",
                    borderRadius: "4px",
                  }}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 6 }}>
                <TextField
                  type="number"
                  name="QTY"
                  label="Quantity"
                  value={item.QTY}
                  onChange={(event) => changeHandler(event, index)}
                  variant="filled"
                  sx={{
                    width: "100%",
                    backgroundColor: "var(--secondary)",
                    borderRadius: "4px",
                  }}
                />
              </Grid2>

              <Grid2 size={{ sx: 12 }} sx={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="error"
                  onClick={() => removeHandler(index)}
                >
                  remove
                </Button>
              </Grid2>

              <Divider component="div" sx={{ marginBottom: "16px" }} />
            </Grid2>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AddProduct;
