import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl: string = import.meta.env.VITE_APP_API_URL;

export const useQrCode = () => {
  const [error, setError] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [connected, setConnected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getQrCode = async () => {
    setIsLoading(true);
    await axios
      .get(baseUrl + "/status/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setIsLoading(false);
        setConnected(response.data.connected)
        if (response.data.qrCode) {
          if (connected !== true) {
            setQrCode(response.data.qrCode.base64Qrimg);
          }
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    (async () => {
      await getQrCode();
    })();
  }, []);

  return { qrCode, connected, isLoading, error };
};
