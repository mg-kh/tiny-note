import { getSingleNote } from "@/services/tinyNote.service";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const Hook = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const handleGetSingleNote = useCallback(() => {
    getSingleNote(id)
      .then((note) => {
        setTitle(note?.title);
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
    title,
    body,
    // action
    setBody,
  };
};

export default Hook;
