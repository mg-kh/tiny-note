import { useState } from "react";
import { FiAlertOctagon, FiCheck } from "react-icons/fi";

import { subscribe } from "event-bus-react";

import { SHOW_ALERT } from "@/utils/constants";
import IfElse from "./IfElse";

const Alert = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [message, setAlertMessage] = useState("");

  subscribe(SHOW_ALERT, ({ type, message }) => {
    setIsShowAlert(true);
    setAlertType(type);
    setAlertMessage(message);
    const timeout = setTimeout(() => {
      setIsShowAlert(false);
      clearTimeout(timeout);
    }, 1500);
  });

  return (
    <>
      {isShowAlert && (
        <IfElse
          isTrue={alertType === "success"}
          ifBlock={
            <div className="toast toast-top toast-end">
              <div className="flex items-center w-64 gap-3 px-2 py-2 rounded-md shadow-lg alert-success">
                <div className="p-1 bg-green-600 rounded-full">
                  <FiCheck className="stroke-white" />
                </div>
                <div className="text-sm text-green-100">{message}</div>
              </div>
            </div>
          }
          elseBlock={
            <div className="w-32 toast toast-top toast-end">
              <div className="flex items-center w-64 gap-3 px-2 py-2 rounded-md alert alert-error">
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
