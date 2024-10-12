import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
} from "@chakra-ui/react";


const pages: string[] = ["Home", "Projects", "About"];
const pageLink: string[] = ["#", "https://google.com", "#"];

const NavBar = () => {
  return (
    <Card
      borderRadius="full"
      border="3px solid"
      backgroundColor="black"
      align="center"
      marginLeft="250px"
      marginRight="250px"
      marginTop="10px"
      marginBottom="10px"
    >
      <CardBody>
        <Breadcrumb separator="">
          {pages.map((page, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink
                href={pageLink[index]}
                fontWeight="bold"
                textFillColor="white"
                textDecoration="none"
                _hover={{
                  textFillColor: "orange",
                  textDecoration: "underline",
                }}
              >
                {page}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </CardBody>
    </Card>
  );
};
export default NavBar;
