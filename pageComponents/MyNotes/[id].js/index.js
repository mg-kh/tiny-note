import Hook from "./Hook";

import { FiEdit3 } from "react-icons/fi";

import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";

const SingleNote = () => {
  const {
    ref,
    body,
    //action
    setBody,
    handleGoToEdit,
  } = Hook();

  return (
    <MainLayout
      editBtn={
        <div className="tooltip hover:tooltip-open" data-tip="Edit Note">
          <button
            onClick={handleGoToEdit}
            className="btn btn-sm btn-outline btn-square"
          >
            <i className="w-4">
              <FiEdit3 className="w-full h-full" />
            </i>
          </button>
        </div>
      }
      main={
        <>
          <RTEditor ref={ref} body={body} setBody={setBody} readOnly={true} />
        </>
      }
    />
  );
};

export default SingleNote;
