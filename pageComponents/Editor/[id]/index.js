import React from "react";

import { IoSaveOutline } from "react-icons/io5";

import MainLayout from "@/layouts/MainLayout";
import RTEditor from "@/components/RTEditor";

import Hook from "./Hook";

const EditNote = () => {
  const {
    ref,
    body,
    color,
    // actions
    setBody,
    handleSave,
    setColor,
  } = Hook();
  return (
    <MainLayout
      saveBtn={
        <div className="tooltip hover:tooltip-open" data-tip="Save">
          <button
            onClick={handleSave}
            className="btn btn-sm btn-outline btn-square"
          >
            <IoSaveOutline />
          </button>
        </div>
      }
      main={
        <>
          <RTEditor
            color={color}
            setColor={setColor}
            body={body}
            setBody={setBody}
            ref={ref}
          />
        </>
      }
    />
  );
};

export default EditNote;
