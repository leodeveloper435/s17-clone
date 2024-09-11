type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  label?: string;
  options: Option[];
};

export const Select = ({
  name,
  handleChange,
  value,
  label,
  options,
}: Props) => {
  return (
    <div>
      <select
        required
        className="m-auto
                   w-full
                   font-[400]
                   px-[10px]
                   py-[12px]
                   text-[14px]
                   md:text-[16px]
                   placeholder-[#515866]
                   text-[#515866]
                   border
                   border-gray-300
                   rounded-[5px]
                   focus:outline-seconday-green
                   focus:ring-seconday-green
                   focus:border-seconday-green
                   focus:z-10"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
