import { useState, useRef } from "react";
import { insertNote } from "@/services/tinyNote.service";
import {
  clearStorage,
  getAll,
  getOne,
  removeOne,
  searchByTitle,
} from "@/utils/storage";
import { v4 as uuidv4 } from "uuid";

const Hook = () => {
  const [body, setBody] = useState("");
  const ref = useRef();

  const handleInsertNote = () => {
    insertNote({ id: uuidv4(), title: "hi world", body: "This is body" });
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
