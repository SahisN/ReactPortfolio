import { Box, Text } from "@chakra-ui/react";
import { darkBlue, grey, lightGrey } from "../colors/useColors";
import TechnologyCard from "./TechnologyCard";

const TechnologyStack = () => {
  return (
   <Box backgroundColor={darkBlue} padding='40px'>
    <Text marginBottom='5px' textColor={grey} fontWeight='bold'>Stacks</Text>
    <Box>
      <Text textColor={lightGrey} fontWeight='bold'>Technologies, I Work With</Text>
      <TechnologyCard/>
    </Box>
   </Box>
  );
};

export default TechnologyStack;
