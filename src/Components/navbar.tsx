import { HStack, Image } from "@chakra-ui/react";
import logo from "../Assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./searchInput";

const Navbar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
