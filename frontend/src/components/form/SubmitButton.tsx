type Props = {
  value: string;
};

export const SubmitButton = ({ value }: Props) => {
  return (
    <button
      type="submit"
      className="w-[178px]
                 py-2
                 px-4
                 bg-primary-green
                 text-[16px]
                 font-[500]
                 rounded-lg
                 text-white
                 hover:bg-green-700
                 focus:outline-none
                 focus:ring-2
                 focus:ring-offset-2
                 focus:ring-primary-green
                 ease-out
                 duration-300"
    >
      {value}
    </button>
  );
};
