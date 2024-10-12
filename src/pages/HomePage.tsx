import { Button, Card, CardBody, Center, Container, Text} from "@chakra-ui/react";
import { orange } from "../colors/useColors";

const name = 'Sahis Neupane';
const description = 'I transform ideas into digital realities, focusing on creating unique and enganging experience for users';

const HomePage = () => {
  return (
    <Center>
      <Card backgroundColor="black" textColor="white" marginTop="20px">
        <CardBody textAlign='center'>
          <Text fontSize='40px' fontStyle="bold"> {name} </Text>
          <Container marginBottom='20px'>
            <Text fontSize='15px'>{description}</Text>
          </Container>
          <Button backgroundColor={orange} borderRadius='full'>
            <Text textColor='white'>
              Reach Out
            </Text>
          </Button>
        </CardBody>
      </Card>
    </Center>
  );
};

export default HomePage;
