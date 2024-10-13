import { Card, CardBody, Center, Flex, Image, Text } from "@chakra-ui/react"
import { darkBlue } from "../colors/useColors"

interface props {
    imgPath : string,
    title: string,
    index: number,
}

const TechnologyCard = ({title, imgPath, index} : props) => {
  return (
    <Flex>
        <Card key={index} backgroundColor={darkBlue} borderRadius='18px' border='1px solid grey' >
            <CardBody textAlign='center'>
                <Center>
                    <Image src={imgPath} />
                </Center>
                <Text marginTop='15px' textColor='white' fontWeight='bold'>
                    {title}
                </Text>
            </CardBody>
        </Card>
    </Flex>
   
  )
}

export default TechnologyCard;