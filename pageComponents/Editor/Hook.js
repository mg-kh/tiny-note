import { insertNote } from "@/services/tinyNote.service";
import {
  SAVE_NOTE,
  SAVE_NOTE_EVENT,
  SHOW_ALERT,
  SHOW_ALERT_EVENT,
} from "@/utils/constants";
import { INSERT_SUCCESS_MESSAGE } from "@/utils/infoMessages";
import useEventBus from "event-bus-react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Hook = () => {
  const [body, setBody] = useState("");
  const [color, setColor] = useState("#22c55e");
  const [title, setTitle] = useState("");
  const { subscribe } = useEventBus(SAVE_NOTE_EVENT);

  const handleInsertNote = () => {
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
        window[SHOW_ALERT_EVENT].emit(SHOW_ALERT, {
          type: "success",
          message: INSERT_SUCCESS_MESSAGE,
        });
      })
      .catch((error) => {
        //
      });
  };

  // subscribe the save event
  subscribe(SAVE_NOTE, () => {
    handleInsertNote();
  });

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
