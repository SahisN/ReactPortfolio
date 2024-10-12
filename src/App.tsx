import { Grid, GridItem, Show, Text } from '@chakra-ui/react';
import './index.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Grid  templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "main main"`
    }}>
      <GridItem area="nav" backgroundColor='black'>
        <NavBar />
      </GridItem>

      <GridItem area="main" bg='orange'>
        main Page
      </GridItem>

    </Grid>
  );
}

export default App;
