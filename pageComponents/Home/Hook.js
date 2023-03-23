import { insertNote } from "@/services/tinyNote.service";
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
        alert();
      })
      .catch(() => {
        //
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
