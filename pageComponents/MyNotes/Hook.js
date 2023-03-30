import { useCallback, useEffect, useMemo, useState } from "react";

import { getAllNotes, removeSingleNote } from "@/services/tinyNote.service";
import { SHOW_ALERT, SHOW_ALERT_EVENT } from "@/utils/constants";
import { DELETE_SUCCESS_MESSAGE } from "@/utils/infoMessages";
import cloneDeep from "lodash/cloneDeep";
import filter from "lodash/filter";
import includes from "lodash/includes";
import lowerCase from "lodash/lowerCase";

const Hook = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [color, setColor] = useState("");
  const [resultNote, setResultNote] = useState([]);
  const isSearching = useMemo(() => {
    if (color || keyword) {
      return true;
    } else {
      return false;
    }
  }, [color, keyword]);

  const handleGetAllNotes = useCallback(() => {
    let tempNotes = [];
    getAllNotes()
      .then((notes) => {
        Object.keys(notes).forEach(function (key) {
          tempNotes.push({ id: key, value: notes[key] });
        });
        setNotes(tempNotes);
        setResultNote(tempNotes);
      })
      .catch();
  }, []);

  const handleRemoveSingleNote = (id) => {
    removeSingleNote(id)
      .then(() => {
        window[SHOW_ALERT_EVENT].emit(SHOW_ALERT, {
          type: "success",
          message: DELETE_SUCCESS_MESSAGE,
        });
        handleGetAllNotes();
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
        includes(lowerCase(note?.value?.color), lowerCase(color)) &&
        includes(lowerCase(note?.value?.title), lowerCase(keyword))
      );
    });
    setNotes(filteredNotes);
  }, [color, keyword, resultNote]);

  return {
    notes,
    keyword,
    color,
    isSearching,
    // actions
    handleRemoveSingleNote,
    handleCancelColorSearch,
    handleCancelTitleSearch,
    setKeyword,
    setColor,
  };
};

export default Hook;
