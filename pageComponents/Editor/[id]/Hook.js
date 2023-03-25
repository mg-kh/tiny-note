import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSingleNote, replaceNote } from "@/services/tinyNote.service";
import { UPDATE_SUCCESS_MESSAGE } from "@/utils/infoMessages";

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
        EventBus.emit("alert", {
          isShow: true,
          type: "success",
          message: UPDATE_SUCCESS_MESSAGE,
        });
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
