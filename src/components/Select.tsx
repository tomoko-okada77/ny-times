type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  placeholder?: string;
  wrapperClass?: string;
};

const Select = (props: Props) => {
  const {
    options,
    placeholder = "選択してください",
    wrapperClass,
    ...selectProps
  } = props;

  return (
    <div
      className={`${wrapperClass} w-full md:max-w-[320px] px-6 border border-gray-300 rounded-md flex items-center justify-between gap-3`}
    >
      <select {...selectProps} className="w-full py-3">
        <option value="" className="text-gray-300">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;