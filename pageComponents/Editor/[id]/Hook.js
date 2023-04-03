import { getSingleNote, replaceNote } from "@/services/tinyNote.service";
import { SHOW_ALERT, UPDATE_NOTE } from "@/utils/constants";
import {
  UPDATE_ERROR_MESSAGE,
  UPDATE_SUCCESS_MESSAGE,
} from "@/utils/infoMessages";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { subscribe } from "event-bus-react";

const Hook = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [color, setColor] = useState("#D9E3F0");
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const handleUpdate = useCallback(() => {
    const data = {
      id,
      title,
      body,
      color,
    };
    replaceNote(id, data)
      .then(() => {
        EventBus.emit(SHOW_ALERT, {
          type: "success",
          message: UPDATE_SUCCESS_MESSAGE,
        });
      })
      .catch(() => {
        EventBus.emit(SHOW_ALERT, {
          type: "error",
          message: UPDATE_ERROR_MESSAGE,
        });
      });
  }, [title, body, color]);

  const handleGetSingleNote = useCallback(() => {
    getSingleNote(id)
      .then((note) => {
        setTitle(note?.title);
        setBody(note?.body);
        setColor(note?.color);
      })
      .catch(() => {
        //
      });
  }, [id]);

  useEffect(() => {
    handleGetSingleNote();
  }, [id]);

  // listening the events
  subscribe(
    UPDATE_NOTE,
    () => {
      handleUpdate();
    },
    [title, body, color]
  );

  return {
    title,
    body,
    color,
    // actions
    setBody,
    handleUpdate,
    setColor,
    setTitle,
  };
};

export default Hook;
