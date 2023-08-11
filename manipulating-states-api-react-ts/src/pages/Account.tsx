import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../App";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Account = () => {
  const [userData, setUserData] = useState<null | UserData>();

  const context = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();
  const { id } = useParams();
  const navigate = useNavigate();

  if (userData && id !== userData.id) {
    navigate("/");
  }

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
