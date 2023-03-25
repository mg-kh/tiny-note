import { getSingleNote } from "@/services/tinyNote.service";
import { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { EDITOR } from "@/utils/locationPathName";

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

  const handleGoToEdit = () => {
    router.push(`${EDITOR}/${id}`);
  };

  useEffect(() => {
    handleGetSingleNote();
  }, [id]);

  return {
    ref,
    body,
    // action
    setBody,
    handleGoToEdit,
  };
};

export default Hook;
