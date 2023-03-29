import { getSingleNote, replaceNote } from "@/services/tinyNote.service";
import { UPDATE_SUCCESS_MESSAGE } from "@/utils/infoMessages";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Hook = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [color, setColor] = useState("#D9E3F0");
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const handleSave = useCallback(() => {
    const data = {
      id,
      title,
      body,
      color,
    };
    replaceNote(id, data)
      .then(() => {
        //
      })
      .catch(() => {
        //
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
  }, []);

  useEffect(() => {
    handleGetSingleNote();
  }, [id]);

  useEffect(() => {
    handleSave();
  }, [title, body, color]);

  return {
    title,
    body,
    color,
    isAutoSaving,
    // actions
    setBody,
    handleSave,
    setColor,
    setTitle,
    setIsAutoSaving,
  };
};

export default Hook;
