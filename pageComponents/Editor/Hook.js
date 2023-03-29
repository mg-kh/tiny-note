import {
  insertNote,
  replaceNote,
  getSingleNote,
  removeSingleNote,
} from "@/services/tinyNote.service";
import { INSERT_SUCCESS_MESSAGE } from "@/utils/infoMessages";
import { debounce, isEmpty } from "lodash";
import { useRef, useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

const Hook = () => {
  const [body, setBody] = useState("");
  const [color, setColor] = useState("#D9E3F0");
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [isAutoSaving, setIsAutoSaving] = useState(false);

  const handleInsertNote = useCallback(() => {
    const note = {
      id,
      title,
      body,
      color,
    };
    insertNote(note)
      .then(() => {
        //
      })
      .catch((error) => {
        //
      });
  }, [id]);

  const handleReplaceNote = useCallback(() => {
    const note = {
      id,
      title,
      body,
      color,
    };
    replaceNote(id, note).then(() => {
      //
    });
  }, [title, body, color]);

  // create skeleton note in storage
  useEffect(() => {
    handleInsertNote();
  }, [id]);

  useEffect(() => {
    setId(uuidv4());
    return () => setId("");
  }, []);

  useEffect(handleReplaceNote, [title, body, color]);

  return {
    color,
    body,
    title,
    isAutoSaving,
    // actions
    setBody,
    setColor,
    setTitle,
    setIsAutoSaving,
  };
};

export default Hook;
