type Props = {
    title: string;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
};
export const Button = ({ title, onClick, type }: Props) => {
  return (
    <button
      type={ type}
      onClick={onClick}
      className=" w-full 
                        px-4 py-2 
                        tracking-wide 
                        text-white 
                        transition-colors 
                        duration-200 
                        transform 
                        bg-blue-700 
                        rounded-md 
                        hover:bg-blue-600 
                        focus:outline-none 
                        focus:bg-blue-600"
    >
      {title}
    </button>
  );
};
