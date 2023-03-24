import { useEffect, useState, useCallback } from "react";

import { getAllNotes, removeSingleNote } from "@/services/tinyNote.service";

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
