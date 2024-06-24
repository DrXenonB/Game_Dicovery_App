import { HStack, Image } from "@chakra-ui/react";
import logo from "../Assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./searchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
