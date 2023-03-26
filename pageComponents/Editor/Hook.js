import { insertNote } from "@/services/tinyNote.service";
import { INSERT_SUCCESS_MESSAGE } from "@/utils/infoMessages";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Hook = () => {
  const [body, setBody] = useState("");
  const [color, setColor] = useState("#D9E3F0");
  const ref = useRef();
  const [isShowModal, setIsShowModal] = useState(false);

  const handleInsertNote = () => {
    const note = {
      id: uuidv4(),
      title: ref.current.value,
      body,
      color,
    };
    insertNote(note)
      .then(() => {
        EventBus.emit("alert", {
          type: "success",
          message: INSERT_SUCCESS_MESSAGE,
        });
        setBody("");
        ref.current.value = "";
        setColor("#D9E3F0");
      })
      .catch((error) => {
        EventBus.emit("alert", {
          type: "error",
          message: error,
        });
      });
  };

  return {
    ref,
    color,
    body,
    isShowModal,
    // actions
    setBody,
    handleInsertNote,
    setIsShowModal,
    setColor,
  };
};

export default Hook;
