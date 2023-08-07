import { Center, SimpleGrid } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";

const Account = () => {
  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        <CardInfo text={"Access information"} />
        <CardInfo text={"Account information"} />
      </SimpleGrid>
    </Center>
  );
};

export default Account;
