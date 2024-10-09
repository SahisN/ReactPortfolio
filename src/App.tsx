import { Box, StackDivider, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import TechnologyStack from "./components/TechnologyStack";

function App() {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box h="40px" bg="yellow.200">
        <NavBar />
      </Box>
      <Box h="40px" bg="tomato">
        <HomePage />
      </Box>
      <Box h="40px" bg="pink.100">
        <TechnologyStack />
      </Box>
    </VStack>
  );
}

export default App;
