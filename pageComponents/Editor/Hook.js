import { insertNote } from "@/services/tinyNote.service";
import { SAVE_NOTE, SHOW_ALERT } from "@/utils/constants";
import {
  INSERT_ERROR_MESSAGE,
  INSERT_SUCCESS_MESSAGE,
} from "@/utils/infoMessages";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { subscribe } from "event-bus-react";

const Hook = () => {
  const [body, setBody] = useState("");
  const [color, setColor] = useState("#22c55e");
  const [title, setTitle] = useState("");

  const handleInsertNote = useCallback(() => {
    const id = uuidv4();
    const note = {
      title,
      body,
      color,
    };
    insertNote(id, note)
      .then(() => {
        setTitle("");
        setBody("");
        setColor("#22c55e");
        EventBus.emit(SHOW_ALERT, {
          type: "success",
          message: INSERT_SUCCESS_MESSAGE,
        });
      })
      .catch((error) => {
        EventBus.emit(SHOW_ALERT, {
          type: "error",
          message: INSERT_ERROR_MESSAGE,
        });
      });
  }, [title, body, color]);

  // subscribe the save event
  subscribe(
    SAVE_NOTE,
    () => {
      handleInsertNote();
    },
    [title, body, color]
  );

  return {
    color,
    body,
    title,
    // actions
    setBody,
    setColor,
    setTitle,
  };
};

export default Hook;
