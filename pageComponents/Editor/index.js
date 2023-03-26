import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";

import { IoSaveOutline } from "react-icons/io5";

import Hook from "./Hook";

const Editor = () => {
  const {
    ref,
    color,
    body,
    isShowModal,
    // actions
    setBody,
    handleInsertNote,
    setIsShowModal,
    setColor,
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
              ref={ref}
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
