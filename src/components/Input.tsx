import debounce from "lodash.debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {
  type?: string;
  wrapperClass?: string;
  onChange: (value: string) => void;
};

const Input = ({ type = "text", wrapperClass = "", onChange }: Props) => {
  const handleInput = debounce((value: string) => {
    onChange(value);
  }, 500);

  return (
    <div
      className={`${wrapperClass} w-full md:max-w-[320px] px-5 py-3 border border-gray-300 rounded-full flex items-center justify-between gap-3`}
    >
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
      <input
        onChange={(e) => handleInput(e.target.value)}
        type={type}
        placeholder="keyword"
        className="flex-grow w-full"
      />
    </div>
  );
};

export default Input;