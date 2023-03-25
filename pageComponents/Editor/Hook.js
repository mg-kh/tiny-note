import { insertNote } from "@/services/tinyNote.service";
import { INSERT_SUCCESS_MESSAGE } from "@/utils/infoMessages";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Hook = () => {
  const [body, setBody] = useState("");
  const ref = useRef();

  const handleInsertNote = () => {
    const note = {
      id: uuidv4(),
      title: ref.current.value,
      body,
    };
    insertNote(note)
      .then(() => {
        EventBus.emit("alert", {
          type: "success",
          message: INSERT_SUCCESS_MESSAGE,
        });
        setBody("");
        ref.current.value = "";
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
    body,
    // actions
    setBody,
    handleInsertNote,
  };
};

export default Hook;
