type Props = {
    title: string;
    type: string;
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input = ({ title, type, handleChange }: Props) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        { title }
      </label>
      <input
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
        id="grid-first-name"
        type={ type }
        placeholder="5583998759222"
        onChange={handleChange}

      />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </>
  );
};
