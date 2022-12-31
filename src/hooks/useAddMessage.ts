import axios from "axios";
import { useState } from "react";

type AddMessage = {
  phoneNumber: string;
  message: string;
  dueDate: string;
};

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useAddMessage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = async (
    { phoneNumber, message, dueDate }: AddMessage,
    successF: () => void,
    errorF: (err: []) => void,
  ) => {
    setIsLoading(true);
    await axios
      .post(`${baseUrl}/message`, {
        phoneNumber,
        message,
        dueDate,
      })
      .then((response) => {
        console.log(response);
        successF()
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        errorF(err.response.data.message)
        setIsLoading(false);
      });
  };

  return { addMessage, isLoading };
};
