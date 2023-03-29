import { useCallback, useEffect, useState } from "react";

import { getAllNotes, removeSingleNote } from "@/services/tinyNote.service";
import { DELETE_SUCCESS_MESSAGE } from "@/utils/infoMessages";
import cloneDeep from "lodash/cloneDeep";
import filter from "lodash/filter";
import includes from "lodash/includes";
import isEmpty from "lodash/isEmpty";
import lowerCase from "lodash/lowerCase";

const Hook = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [color, setColor] = useState("");
  const [resultNote, setResultNote] = useState([]);

  const handleGetAllNotes = useCallback(() => {
    getAllNotes()
      .then((notes) => {
        setNotes(notes);
        setResultNote(notes);
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

  const handleCancelColorSearch = () => {
    setColor("");
  };

  const handleCancelTitleSearch = () => {
    setKeyword("");
  };

  useEffect(() => {
    handleGetAllNotes();
  }, []);

  useEffect(() => {
    const clonedNotes = cloneDeep(resultNote);
    const filteredNotes = filter(clonedNotes, (note) => {
      return (
        includes(lowerCase(note.color), lowerCase(color)) &&
        includes(lowerCase(note.title), lowerCase(keyword))
      );
    });
    if (isEmpty(filteredNotes)) {
      //
    } else {
      setNotes(filteredNotes);
    }
  }, [color, keyword]);

  return {
    notes,
    keyword,
    color,
    // actions
    handleRemoveSingleNote,
    handleCancelColorSearch,
    handleCancelTitleSearch,
    setKeyword,
    setColor,
  };
};

export default Hook;
