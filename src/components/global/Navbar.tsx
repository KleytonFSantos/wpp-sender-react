import React from "react";

type Props = {
    fixed: boolean
}

export default function Navbar({ fixed }: Props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-center lg:w-auto lg:static lg:block lg:justify-center">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Whatsapp Bot
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
