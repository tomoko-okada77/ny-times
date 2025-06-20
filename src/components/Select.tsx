import { SECTION_NAMES } from "@/data/sections";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const Select = ({ value, onChange }: Props) => {
  return (
    <div className="w-1/3 px-6 border border-gray-300 rounded-md flex items-center justify-between gap-3">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-3"
      >
        <option value="" className="text-gray-300">ジャンルを選択</option>
        {SECTION_NAMES.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;