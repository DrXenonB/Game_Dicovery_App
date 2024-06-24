import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input placeholder="Search" size="md" borderRadius="20px" />
      </InputGroup>
    </>
  );
};

export default SearchInput;
