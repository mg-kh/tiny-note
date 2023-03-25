import { useState } from "react";
import { FiAlertOctagon, FiCheck } from "react-icons/fi";

import useEventBus from "@/hooks/useEventBus";

import IfElse from "./IfElse";

const Alert = () => {
  const { subscribe } = useEventBus();
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [message, setAlertMessage] = useState("");

  subscribe("alert", ({ type, message }) => {
    setIsShowAlert(true);
    setAlertType(type);
    setAlertMessage(message);
    const interval = setInterval(() => {
      setIsShowAlert(false);
      clearInterval(interval);
    }, 1500);
  });

  return (
    <>
      {isShowAlert && (
        <IfElse
          isTrue={alertType === "success"}
          ifBlock={
            <div className="toast toast-top toast-end">
              <div className="alert-success shadow-lg py-2 rounded-md w-64 flex px-2 gap-3 items-center">
                <div className="p-1 bg-green-600 rounded-full">
                  <FiCheck className="stroke-white" />
                </div>
                <div className="text-sm text-green-100">{message}</div>
              </div>
            </div>
          }
          elseBlock={
            <div className="toast toast-top toast-end w-32">
              <div className="alert alert-error py-2 rounded-md w-64 flex px-2 gap-3 items-center">
                <div className="p-1 bg-red-600 rounded-full">
                  <FiAlertOctagon className="stroke-white" />
                </div>
                <div className="text-sm text-green-100">{message}</div>
              </div>
            </div>
          }
        />
      )}
    </>
  );
};

export default Alert;
