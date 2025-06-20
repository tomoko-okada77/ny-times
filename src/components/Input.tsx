import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  wrapperClass?: string;
};

const Input = (props: Props) => {
  const { wrapperClass, ...inputProps } = props;
  return (
    <div
      className={`${wrapperClass} w-full md:max-w-[320px] px-5 py-3 border border-gray-300 rounded-full flex items-center justify-between gap-3`}
    >
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
      <input {...inputProps} placeholder="keyword" className="flex-grow w-full" />
    </div>
  );
};

export default Input;