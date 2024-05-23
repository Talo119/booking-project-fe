import { Button, Grid, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

const BusinessPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography
          component="h2"
          color={(theme) => theme.palette.primary.dark}
          variant="h5"
        >
          Business
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        display="flex"
        justifyContent="end"
        alignItems="end"
      >
        <Button variant="contained" startIcon={<Add />}>
          Add
        </Button>
      </Grid>
      <Grid xs={12}>
        
      </Grid>
    </Grid>
  );
};

export default BusinessPage;
