import { Grid2, TextField } from "@mui/material";
import AddProduct from "./AddProduct";

function Form({ form, setForm }) {
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form method="POST">
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              required={true}
              label="Name"
              name="name"
              variant="filled"
              color="primary"
              size="small"
              value={form.name}
              onChange={changeHandler}
              sx={{
                backgroundColor: "var(--secondary)",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              required={true}
              label="Last Name"
              name="lastName"
              variant="filled"
              color="primary"
              size="small"
              value={form.lastName}
              onChange={changeHandler}
              sx={{
                backgroundColor: "var(--secondary)",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              required={true}
              label="Email"
              name="email"
              variant="filled"
              color="primary"
              size="small"
              value={form.email}
              onChange={changeHandler}
              sx={{
                backgroundColor: "var(--secondary)",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              required={true}
              label="Phone"
              name="phone"
              type="number"
              variant="filled"
              color="primary"
              size="small"
              value={form.phone}
              onChange={changeHandler}
              sx={{
                backgroundColor: "var(--secondary)",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Address"
              name="address"
              variant="filled"
              color="primary"
              size="small"
              value={form.address}
              onChange={changeHandler}
              sx={{
                backgroundColor: "var(--secondary)",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6 }}>
            <TextField
              name="date"
              type="date"
              variant="filled"
              color="primary"
              size="small"
              value={new Date(form.date).toISOString().split("T")[0]}
              onChange={changeHandler}
              sx={{
                backgroundColor: "var(--secondary)",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <AddProduct form={form} setForm={setForm} />
          </Grid2>
        </Grid2>
      </form>
    </>
  );
}

export default Form;
