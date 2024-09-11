type Props = {
  imageUrl: string;
} & React.ComponentProps<"div">;

export const BackgroundImageLayout = ({ imageUrl, children }: Props) => {
  return (
    <div
      className="min-h-screen
                 md:min-h-screen
                 w-full
                 bg-gray-50
                 flex
                 justify-center
                 items-center
                 "
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${imageUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};
