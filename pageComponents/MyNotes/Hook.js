import { useEffect, useState, useCallback } from "react";

import { getAllNotes, removeSingleNote } from "@/services/tinyNote.service";
import { DELETE_SUCCESS_MESSAGE } from "@/utils/infoMessages";

const Hook = () => {
  const [notes, setNotes] = useState([]);

  const handleGetAllNotes = useCallback(() => {
    getAllNotes()
      .then((notes) => {
        setNotes(notes);
      })
      .catch();
  }, []);

  const handleRemoveSingleNote = (id) => {
    removeSingleNote(id)
      .then((notes) => {
        setNotes(notes);
        EventBus.emit("alert", {
          type: "success",
          message: DELETE_SUCCESS_MESSAGE,
        });
      })
      .catch(() => {
        //
      });
  };

  useEffect(() => {
    handleGetAllNotes();
  }, []);

  return {
    notes,
    // actions
    handleRemoveSingleNote,
  };
};

export default Hook;
