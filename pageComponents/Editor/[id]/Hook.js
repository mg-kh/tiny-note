import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSingleNote, replaceNote } from "@/services/tinyNote.service";

const Hook = () => {
  const ref = useRef();
  const [body, setBody] = useState();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const handleSave = () => {
    const data = {
      id,
      title: ref.current.value,
      body,
    };
    replaceNote(id, data)
      .then(() => {
        //
      })
      .catch(() => {
        //
      });
  };
  const handleGetSingleNote = () => {
    getSingleNote(id)
      .then((note) => {
        ref.current.value = note?.title;
        setBody(note?.body);
      })
      .catch(() => {
        //
      });
  };

  useEffect(() => {
    handleGetSingleNote();
  }, [id]);

  return {
    ref,
    body,
    // actions
    setBody,
    handleSave,
  };
};

export default Hook;
