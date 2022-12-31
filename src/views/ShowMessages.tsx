import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Table } from "../partials/showMessages/Table";

export const ShowMessages = () => {
  const [openModal, setOpenModal] = useState(false);




  return (
    <>
      <ToastContainer />
      <div className="container px-24 h-full justify-center flex">
        <div className=" w-full">
          <div className="pt-8 text-xl font-semibold">
            Show messages
            <div className="border mt-2 border-zinc-700"></div>
            <div className="flex flex-wrap -mx-3 mb-6 px-4 mt-8">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
