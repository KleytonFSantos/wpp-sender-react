import { SyntheticEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../components/global/Button";
import { Input } from "../components/global/Input";
import { Loading } from "../components/global/Loading";
import { Textarea } from "../components/global/Textarea";
import { useMessages } from "../hooks/useMessages";

export const EditMessage = () => {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, editMessage } = useMessages();
  const handleEditMessage = async (e: SyntheticEvent) => {
    e.preventDefault();
    const dueDateTime = `${date}T${time}:00.000Z`;
    const messageId = parseInt(id as string);
    await editMessage(
      messageId,
      {
        phoneNumber: number,
        message: message,
        dueDate: dueDateTime,
      },
      () => {
        toast.success("Message edited successfully");
        navigate("/messages");
      },
      () => {}
    );
  };

  if (isLoading) {
    <Loading />;
  }

  return (
    <div className="container px-24 h-full justify-center flex">
      <ToastContainer />
      <div className=" w-full">
        <form
          onSubmit={handleEditMessage}
          className="pt-8 text-xl font-semibold"
        >
          Create message
          <div className="border mt-2 border-zinc-700"></div>
          <div className="flex flex-wrap -mx-3 mb-6 mt-5 px-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input
                handleChange={(e) => setNumber(e.currentTarget.value)}
                title="Number"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input
                handleChange={(e) => setDate(e.currentTarget.value)}
                title="Date"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 mt-5 px-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Textarea
                title="Message"
                handleChange={(e) => setMessage(e.currentTarget.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input
                handleChange={(e) => setTime(e.currentTarget.value)}
                title="Time"
                type="time"
              />
            </div>
          </div>
          <Button title="Edit" />
        </form>
      </div>
    </div>
  );
};
