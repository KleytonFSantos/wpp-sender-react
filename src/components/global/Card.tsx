type Props = {
  title: string;
  link: string;
  description: string;
};

export const Card = ({ title, description, link }: Props) => {
  return (
    <div className="w-full p-4 shadow-md lg:max-w-lg bg-white cursor-pointer hover:bg-slate-200 transition-all">
      <a href={link}>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </a>
    </div>
  );
};
