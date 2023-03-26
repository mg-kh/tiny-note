import { useEffect, useState, useCallback } from "react";

import {
  getAllNotes,
  removeSingleNote,
  searchByColor,
  searchByTitle,
} from "@/services/tinyNote.service";
import {
  DELETE_SUCCESS_MESSAGE,
  NOT_FOUND_MESSAGE,
} from "@/utils/infoMessages";
import isEmpty from "lodash/isEmpty";
import debounce from "lodash/debounce";

const Hook = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [color, setColor] = useState(null);

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

  const handleSearchByColor = (color) => {
    setColor(color);
    searchByColor(color)
      .then((notes) => {
        if (!isEmpty(notes)) {
          setNotes(notes);
        }
      })
      .catch(() => {
        //
      });
  };

  const handleSearchByTitle = debounce((keyword) => {
    setKeyword(keyword);
    searchByTitle(keyword)
      .then((notes) => {
        if (!isEmpty(notes)) {
          setNotes(notes);
        } else {
          EventBus.emit("alert", {
            type: "success",
            message: NOT_FOUND_MESSAGE,
          });
        }
      })
      .catch(() => {
        //
      });
  }, 100);

  const handleCancelSearch = () => {
    setKeyword(null);
    setColor(null);
    handleGetAllNotes();
  };

  useEffect(() => {
    handleGetAllNotes();
  }, []);

  return {
    notes,
    keyword,
    color,
    // actions
    handleRemoveSingleNote,
    handleSearchByTitle,
    handleCancelSearch,
    handleSearchByColor,
  };
};

export default Hook;
