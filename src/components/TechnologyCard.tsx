import { Card, CardBody, Flex, Text } from "@chakra-ui/react"
import { darkBlue } from "../colors/useColors"


const TechnologyCard = () => {
  return (
    <Flex>
        <Card backgroundColor={darkBlue} borderRadius='25px' border='2px solid black'>
            <CardBody textAlign='center'>
                <Text marginBottom='10px'>
                    Icon
                </Text>
                
                <Text>
                    Title
                </Text>
            </CardBody>
        </Card>
    </Flex>
  )
}

export default TechnologyCard;