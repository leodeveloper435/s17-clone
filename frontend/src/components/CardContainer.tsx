type Props = React.ComponentProps<"div">;

export const CardContainer = ({ children }: Props) => {
  return (
    <div
      className={`w-full
                  bg-white
                  pb-4
                  px-5
                  md:w-[800px]
                  md:rounded-xl
                  text-center
                  font-[800]
                  flex
                  flex-col`}
      style={{
        boxShadow: "4px 4px 4px 0px #00000040",
      }}
    >
      {children}
    </div>
  );
};
