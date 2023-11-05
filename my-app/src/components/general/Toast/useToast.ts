import {useState} from "react";

const useToast = () => {
  const [type, setType] = useState<string>("Info");
  const [message, setMessage] = useState<string>("");
  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);

  const alert = (type: "Info" | "Error" | "Warning" | "Success", message: string) => {
    setType(type);
    setMessage(message);
    setShowSnackBar(true);
  };

  return {
    type,
    message,
    showSnackBar,
    alert,
  };
};
