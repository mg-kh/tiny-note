import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";

import { IoSaveOutline } from "react-icons/io5";

import Hook from "./Hook";

const Editor = () => {
  const {
    ref,
    body,
    // actions
    setBody,
    handleInsertNote,
  } = Hook();
  return (
    <>
      <MainLayout
        saveBtn={
          <div className="tooltip hover:tooltip-open" data-tip="Save">
            <button
              onClick={handleInsertNote}
              className="btn btn-sm btn-outline btn-square "
            >
              <IoSaveOutline />
            </button>
          </div>
        }
        main={
          <>
            <RTEditor ref={ref} body={body} setBody={setBody} />
          </>
        }
      />
    </>
  );
};

export default Editor;
