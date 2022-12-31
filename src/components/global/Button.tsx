type Props = {
    title: string;
    onClick?: () => void;
};
export const Button = ({ title, onClick }: Props) => {
  return (
    <button
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
