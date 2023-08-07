import { Box } from "@chakra-ui/react";

interface ICardInfo {
  text: string;
}

const CardInfo = ({ text }: ICardInfo) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      padding={8}
      minHeight="120px"
      borderRadius="25px"
    >
      {text}
    </Box>
  );
};

export default CardInfo;
