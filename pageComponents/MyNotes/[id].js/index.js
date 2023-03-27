import Hook from "./Hook";
import Link from "next/link";

import { FiEdit3 } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";
import { MY_NOTES } from "@/utils/locationPathName";

const SingleNote = () => {
  const {
    title,
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
      myNoteBtn={
        <Link href={MY_NOTES}>
          <div className="tooltip hover:tooltip-open" data-tip="All Notes">
            <button className="btn btn-sm btn-outline btn-square">
              <i className="w-4">
                <FiMenu className="w-full h-full" />
              </i>
            </button>
          </div>
        </Link>
      }
      main={
        <>
          <RTEditor
            title={title}
            body={body}
            setBody={setBody}
            readOnly={true}
          />
        </>
      }
    />
  );
};

export default SingleNote;
