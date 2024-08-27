import { Button, Typography } from "@mui/material";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header
        style={{
          width: "100%",
          padding: "8px 4px",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="h2" variant="h6" fontWeight="bold">
          KaviR CRM
        </Typography>

        <Link href="add-customer">
          <Button variant="contained" size="small">
            Add Customer
          </Button>
        </Link>
      </header>

      <main style={{ padding: "4px" }}>{children}</main>

      <footer
        style={{
          width: "100%",
          padding: "8px, 4px",
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="https://github.com/hwssein" target="_blank">
          <Typography
            component="p"
            variant="p"
            color="secondary"
            sx={{
              borderBottom: "2px solid var(--primary)",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            Developed By hwssein
          </Typography>
        </Link>
      </footer>
    </>
  );
}

export default Layout;
