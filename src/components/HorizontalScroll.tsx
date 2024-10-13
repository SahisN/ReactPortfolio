import { Button, Flex, HStack, Text, Card, SystemStyleObject, Container, VStack} from "@chakra-ui/react"
import { darkBlue } from "../colors/useColors"
import TechnologyCard from "./TechnologyCard"
import logo from '../assets/icons/react.svg';

interface props {
  titles: string[]
  image_paths: string[]
}

const buttonHover = {
  backgroundColor: 'inherit',
}

const HorizontalScroll = ({titles, image_paths} : props) => {
  return (
    
      <HStack marginTop="30px" spacing={4} overflowX="auto">
        <Button backgroundColor="inherit" textColor="white" _hover={buttonHover}>&lt;</Button>

        <HStack>
        {titles.map((title, index) => (
          <TechnologyCard title={title} imgPath={logo} index={index} />
        ))}
        </HStack>
        
        <Button backgroundColor="inherit" textColor="white" _hover={buttonHover}>&gt;</Button>
      </HStack>
     
  )
}

export default HorizontalScroll