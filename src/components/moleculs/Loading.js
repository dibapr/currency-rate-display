import LoadingSpinner from "../atoms/LoadingSpinner";
import LoadingText from "../atoms/LoadingText";
import { VStack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <VStack spacing="1em">
      <LoadingSpinner />
      <LoadingText />
    </VStack>
  );
};

export default Loading;
