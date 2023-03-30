import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

import { IoSaveOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

import Hook from "./Hook";
import { MY_NOTES } from "@/utils/locationPathName";

const Editor = () => {
  const {
    title,
    color,
    body,
    // actions
    setBody,
    setColor,
    setTitle,
    setIsAutoSaving,
  } = Hook();
  return (
    <>
      <MainLayout
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
              setTitle={setTitle}
              color={color}
              setColor={setColor}
              body={body}
              setBody={setBody}
            />
          </>
        }
      />
    </>
  );
};

export default Editor;
