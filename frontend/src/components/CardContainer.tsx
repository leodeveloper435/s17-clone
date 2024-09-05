type Props = React.ComponentProps<"div">;

export const CardContainer = ({ children }: Props) => {
  return (
    <div
      className={`w-full
                  h-full
                  bg-white
                  md:w-[651px]
                  md:rounded-xl
                  text-center
                  font-[800]
                  flex
                  flex-col
                  pb-[54px]
                  md:pb-[70px]`}
      style={{
        boxShadow: "4px 4px 4px 0px #00000040",
      }}
    >
      {children}
    </div>
  );
};
