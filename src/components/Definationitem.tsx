import { ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const Definationitem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default Definationitem;
