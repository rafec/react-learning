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

  const actualData = new Date();

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="#FFFFFF" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Welcome, ${userData?.name}!`}
              content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
            />

            <CardInfo
              mainContent={`Balance`}
              content={`R$ ${userData.balance.toFixed(2)}`}
            />
          </>
        )}

        {/* <CardInfo mainContent={"Account information"} content={} /> */}
      </SimpleGrid>
    </Center>
  );
};

export default Account;
