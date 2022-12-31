import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const baseUrl: string = import.meta.env.VITE_APP_API_URL;
type EditMessage = {
  phoneNumber: string;
  message: string;
  dueDate: string;
};

export const useMessages = () => {
  const [messages, setMessages] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMessages = async () => {
    setIsLoading(true);
    await axios
      .get(baseUrl + "/message/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setMessages(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  const editMessage = async (
    id: number,
    { phoneNumber, message, dueDate }: EditMessage,
    succesF: () => void,
    errorF: (error: string) => void
  ) => {
    await axios
      .patch(baseUrl + "/message/" + id, {
        phoneNumber,
        message,
        dueDate,
      })
      .then(() => {
        succesF();
        toast.success("Message edited successfully");
      })
      .catch((error) => {
        const inputError = error.response.data.message;
        if (inputError) {
          try {
            inputError.map((err: string) => {
              toast.error(err);
            });
          } catch {
            toast.error("An error occurred!");
          }
        }
      });
  };

  const deleteMessage = async (id: number) => {
    await axios
      .delete(baseUrl + "/message/" + id)
      .then((response) => {
        if (response.status === 200) {
          getMessages();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    (async () => {
      getMessages();
    })();
  }, []);

  return { messages, isLoading, deleteMessage, editMessage, getMessages };
};
