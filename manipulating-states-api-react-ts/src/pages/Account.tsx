import { Center, SimpleGrid } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
}

const Account = () => {
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  console.log(userData);

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
