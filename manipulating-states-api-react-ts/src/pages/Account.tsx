import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
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
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="#FFFFFF" />
          </Center>
        ) : (
          <CardInfo
            mainContent={`Welcome, ${userData?.name}!`}
            content={"22/05/2020 9:00"}
          />
        )}

        {/* <CardInfo mainContent={"Account information"} content={} /> */}
      </SimpleGrid>
    </Center>
  );
};

export default Account;
