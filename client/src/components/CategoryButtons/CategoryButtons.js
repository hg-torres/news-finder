import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


const CategoryButtons = () => {

return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"></Container>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
  <Grid item xs={3}>
    <Button variant="contained">Entertainment</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Technology</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Food</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Politics</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Science</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Sports</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">World</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Top</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Health</Button>
  </Grid>
  <Grid item xs={3}>
    <Button variant="contained">Environment</Button>
  </Grid>
</Grid>
    </ThemeProvider>
  );
}

export default CategoryButtons