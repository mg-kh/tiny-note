import Link from "next/link";
import { memo } from "react";

import If from "@/components/If";
import IfElse from "@/components/IfElse";
import { EDITOR, HOME, MY_NOTES } from "@/utils/locationPathName";
import {
  FiChevronLeft,
  FiEdit3,
  FiHome,
  FiMenu,
  FiMoon,
  FiPlus,
  FiSun,
  FiSave,
} from "react-icons/fi";

import Hook from "./Hook";
import { SAVE_NOTE, SAVE_NOTE_EVENT } from "@/utils/constants";

const SideBar = memo(function SideBar() {
  const {
    theme,
    pathname,
    // actions
    handleGoToEdit,
    handleBack,
    setTheme,
  } = Hook();

  return (
    <>
      <div className="flex flex-wrap justify-center w-12 gap-3 py-3 rounded-md">
        {/* ----- back ----- */}
        <div
          className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
          data-tip="Back"
        >
          <button
            onClick={handleBack}
            className="btn btn-sm btn-square border-primary btn-primary"
          >
            <i className="w-4">
              <FiChevronLeft className="w-full h-full" />
            </i>
          </button>
        </div>

        {/* ----- Home ----- */}
        <If isTrue={pathname !== HOME}>
          <Link href={HOME}>
            <div
              className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
              data-tip="Home"
            >
              <button className="btn btn-sm btn-square border-primary btn-primary">
                <i className="w-4">
                  <FiHome className="w-full h-full" />
                </i>
              </button>
            </div>
          </Link>
        </If>

        {/* ----- all notes ----- */}
        <If isTrue={pathname !== MY_NOTES}>
          <Link href={MY_NOTES}>
            <div
              className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
              data-tip="All Notes"
            >
              <button className="btn btn-sm btn-square border-primary btn-primary">
                <i className="w-4">
                  <FiMenu className="w-full h-full" />
                </i>
              </button>
            </div>
          </Link>
        </If>

        {/* ----- save ----- */}
        <If isTrue={pathname === EDITOR}>
          <div
            className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
            data-tip="Save Notes"
          >
            <button
              onClick={() => {
                window[SAVE_NOTE_EVENT].emit(SAVE_NOTE);
              }}
              className="btn btn-sm btn-square border-primary btn-primary"
            >
              <i className="w-4">
                <FiSave className="w-full h-full" />
              </i>
            </button>
          </div>
        </If>

        {/* ----- add new note ----- */}
        <If isTrue={pathname !== EDITOR}>
          <Link href={EDITOR}>
            <div
              className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
              data-tip="Create New Note"
            >
              <button className="btn btn-sm btn-square border-primary btn-primary">
                <i className="w-4">
                  <FiPlus className="w-full h-full" />
                </i>
              </button>
            </div>
          </Link>
        </If>

        {/* ----- edit ----- */}
        <If
          isTrue={
            pathname !== EDITOR && pathname !== MY_NOTES && pathname !== HOME
          }
        >
          <div
            className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
            data-tip="Edit Note"
          >
            <button
              onClick={handleGoToEdit}
              className="btn btn-sm btn-square border-primary btn-primary"
            >
              <i className="w-4">
                <FiEdit3 className="w-full h-full" />
              </i>
            </button>
          </div>
        </If>

        {/* ----- theme switch ----- */}
        <IfElse
          isTrue={theme === "winter"}
          ifBlock={
            <div
              className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
              data-tip="Dark Mode"
            >
              <button
                className="btn btn-sm btn-square border-primary btn-primary"
                data-set-theme="dark"
                onClick={() => setTheme("dark")}
              >
                <i className="w-4">
                  <FiMoon className="w-full h-full" />
                </i>
              </button>
            </div>
          }
          elseBlock={
            <div
              className="tooltip tooltip-primary tooltip-left hover:tooltip-open"
              data-tip="Light Mode"
            >
              <button
                className="btn btn-sm btn-square border-primary btn-primary"
                data-set-theme="winter"
                onClick={() => setTheme("winter")}
              >
                <i className="w-4">
                  <FiSun className="w-full h-full" />
                </i>
              </button>
            </div>
          }
        />
      </div>
    </>
  );
});

export default SideBar;
