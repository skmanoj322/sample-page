import { Input } from "./ui/Input";
// import { SearchIcon } from "lucide-react";
import SearchSvg from "./ui/icon/SearchSvg";

const SearchBar = () => {
  const handleInputChange = () => {};

  return (
    <div className="relative">
      {/* Search Input Bar */}
      {/* <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" /> */}
      <SearchSvg className="absolute left-3 top-[23px] h-4 w-4 -translate-y-1/2 transform text-gray-500" />
      <Input
        placeholder="Search Key word... "
        className="px-10 border-t-[1px] focus-visible:ring-transparent rounded-full"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
