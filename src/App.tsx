import { Grid, GridItem, } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import TechnologyStack from "./components/TechnologyStack";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
      }}
    >
      <GridItem area="nav" backgroundColor="black">
        <NavBar />
      </GridItem>

      <GridItem area="main" bg="black">
        <HomePage />
      </GridItem>

      <GridItem area="footer">
        <TechnologyStack />
      </GridItem>
    </Grid>
  );
}

export default App;
