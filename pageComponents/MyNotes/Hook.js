import { useEffect, useState, useCallback } from "react";

import {
  getAllNotes,
  removeSingleNote,
  searchByTitle,
} from "@/services/tinyNote.service";
import { DELETE_SUCCESS_MESSAGE } from "@/utils/infoMessages";

const Hook = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(null);

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

  const handleSearchByTitle = (keyword) => {
    setKeyword(keyword);
    searchByTitle(keyword)
      .then((notes) => {
        setNotes(notes);
      })
      .catch(() => {
        //
      });
  };

  const handleCancelSearch = () => {
    setKeyword(null);
    handleGetAllNotes();
  };

  useEffect(() => {
    handleGetAllNotes();
  }, []);

  return {
    notes,
    keyword,
    // actions
    handleRemoveSingleNote,
    handleSearchByTitle,
    handleCancelSearch,
  };
};

export default Hook;
