import { getSingleNote } from "@/services/tinyNote.service";
import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

const Hook = () => {
  const ref = useRef();
  const [body, setBody] = useState();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const handleGetSingleNote = useCallback(() => {
    getSingleNote(id)
      .then((note) => {
        ref.current.value = note?.title;
        setBody(note?.body);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  useEffect(() => {
    handleGetSingleNote();
  }, [id]);

  return {
    ref,
    body,
    // action
    setBody,
  };
};

export default Hook;
