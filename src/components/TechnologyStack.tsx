import { Box, Text } from "@chakra-ui/react";
import { darkBlue, grey, lightGrey } from "../colors/useColors";
import HorizontalScroll from "./HorizontalScroll";

const programmingLanguages = ['Javascript', 'Javascript', 'Javascript', 'Javascript', 'Javascript', 'Javacript', 'Javascript', 'Javascript']


const TechnologyStack = () => {
  return (
   <Box backgroundColor={darkBlue} padding='40px'>
    <Text marginBottom='5px' textColor={grey} fontWeight='bold'>Stacks</Text>
    <Box>
      <Text textColor={lightGrey} fontWeight='bold'>Technologies, I Work With</Text>
      <HorizontalScroll titles={programmingLanguages} image_paths={["a"]}/>
    </Box>
   </Box>
  );
};

export default TechnologyStack;
