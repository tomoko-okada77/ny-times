import debounce from "lodash.debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {
  onChange: (value: string) => void;
};

const Input = ({ onChange }: Props) => {
  const handleInput = debounce((value: string) => {
    onChange(value);
  }, 500);

  return (
    <div className="search w-1/3 px-6 py-3 border border-gray-300 rounded-full flex items-center justify-between gap-3">
      <input
        onChange={(e) => handleInput(e.target.value)}
        type="text"
        placeholder="keyword"
        className="flex-grow"
      />
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
    </div>
  );
};

export default Input;