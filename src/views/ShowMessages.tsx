import { useState } from "react";
import { EditModal } from "../partials/showMessages/EditModal";
import { Table } from "../partials/showMessages/Table";

export const ShowMessages = () => {
  const [openModal, setOpenModal] = useState(false)
  const [messageId, setMessageId] = useState<any>(null)
  const [closeModal, setCloseModal] = useState(false)
  const handleOpenEditModal = (id:number) => {
    setOpenModal(true);
    setCloseModal(false);
    setMessageId(id);
  }

  const handleCloseModal = () => {
    setCloseModal(true);
    setOpenModal(false);
  }
  return (
    <>
      <EditModal openModal={openModal} handleCloseModal={handleCloseModal} messageId={messageId}/>
      <div className="container px-24 h-full justify-center flex">
        <div className=" w-full">
          <div className="pt-8 text-xl font-semibold">
            Show messages
            <div className="border mt-2 border-zinc-700"></div>
            <div className="flex flex-wrap -mx-3 mb-6 px-4 mt-8">
              <Table handleOpenModal={handleOpenEditModal}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
