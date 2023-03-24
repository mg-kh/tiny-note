import React from "react";

import Hook from "./Hook";

import MainLayout from "@/layouts/MainLayout";
import RTEditor from "@/components/RTEditor";

const SingleNote = () => {
  const {
    ref,
    body,
    //action
    setBody,
  } = Hook();

  return (
    <MainLayout
      main={
        <>
          <RTEditor ref={ref} body={body} setBody={setBody} readOnly={true} />
        </>
      }
    />
  );
};

export default SingleNote;
