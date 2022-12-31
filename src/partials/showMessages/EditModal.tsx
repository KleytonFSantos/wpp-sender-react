import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../components/global/Button";
import { Input } from "../../components/global/Input";
import { Textarea } from "../../components/global/Textarea";
import CloseIcon from "@mui/icons-material/Close";
import { useMessages } from "../../hooks/useMessages";

type Props = {
  messageId: number;
  openModal: boolean;
  handleCloseModal: () => void;
};

export const EditModal = ({
  messageId,
  openModal,
  handleCloseModal,
}: Props): JSX.Element => {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { editMessage, getMessages } = useMessages();

  const handleEditMessage = async () => {
    const dueDateTime = `${date}T${time}:00.000Z`;

    await editMessage(messageId, {
      phoneNumber: number,
      message: message,
      dueDate: dueDateTime,
    });
    
    handleCloseModal();
  };

  return (
    <>
      <ToastContainer />
      {openModal && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl pb-2">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="mt-2 flex flex-col justify-center items-center">
                      <div className="w-full">
                        <div className="float-right">
                          <button onClick={handleCloseModal}>
                            <CloseIcon />
                          </button>
                        </div>
                        <form
                          className="pt-8 text-xl font-semibold"
                        >
                          <div>Edit message</div>
                          <div className="border mt-2 border-zinc-700"></div>
                          <div className="flex flex-wrap -mx-3 mb-6 mt-5 px-2">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <Input
                                handleChange={(e) =>
                                  setNumber(e.currentTarget.value)
                                }
                                title="Number"
                                type="text"
                              />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <Input
                                handleChange={(e) =>
                                  setDate(e.currentTarget.value)
                                }
                                title="Date"
                                type="date"
                              />
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 mb-6 mt-5 px-2">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <Textarea
                                title="Message"
                                handleChange={(e) =>
                                  setMessage(e.currentTarget.value)
                                }
                              />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <Input
                                handleChange={(e) =>
                                  setTime(e.currentTarget.value)
                                }
                                title="Time"
                                type="time"
                              />
                            </div>
                          </div>
                          <div className="w-full flex flex-row gap-2">
                            <Button
                              type="button"
                              onClick={handleEditMessage} 
                              title="Save" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
