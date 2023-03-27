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
    isShowModal,
    // actions
    setBody,
    setIsShowModal,
    setColor,
    setTitle,
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
            <div className={`modal ${isShowModal && "modal-open"}`}>
              <div className="relative modal-box">
                <button
                  onClick={() => setIsShowModal(false)}
                  className="absolute btn-ghost btn btn-sm btn-circle right-2 top-2"
                >
                  ✕
                </button>
                <h3 className="text-lg font-bold">
                  Your note will not be save!
                </h3>
                <div className="modal-action">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setIsShowModal(false)}
                  >
                    Continue
                  </button>
                  <button
                    className="gap-2 btn btn-primary btn-sm"
                    onClick={() => setIsShowModal(false)}
                  >
                    <IoSaveOutline />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
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
