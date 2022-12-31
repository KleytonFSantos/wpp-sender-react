import { ChangeEvent } from "react";

type Props = {
  title: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = ({ title, handleChange }: Props) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {title}
      </label>
      <textarea
        className="
                    appearance-none 
                    block w-full 
                    bg-gray-200 
                    text-gray-700 border 
                    rounded 
                    py-3 
                    px-4 
                    mb-3 
                    leading-tight 
                    focus:outline-none 
                    focus:bg-white
                "
        placeholder="Tap your message here."
        onChange={handleChange}
      />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </>
  );
};
