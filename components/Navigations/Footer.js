import { memo, useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Link from "next/link";
import { useRouter } from "next/router";

import IfElse from "@/components/IfElse";
import If from "@/components/If";

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

import { EDITOR, HOME, MY_NOTES } from "@/utils/locationPathName";

import Hook from "./Hook";
import { SAVE_NOTE } from "@/utils/constants";

const Footer = memo(function Footer() {
  const {
    theme,
    pathname,
    // actions
    handleGoToEdit,
    handleBack,
    setTheme,
  } = Hook();

  return (
    <div className="flex justify-center gap-3 py-2">
      {/* ----- back ----- */}
      <div
        className="tooltip tooltip-primary tooltip-top hover:tooltip-open"
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
            className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
            data-tip="Home"
          >
            <button className="btn btn-sm btn-primary btn-square">
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
            className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
            data-tip="All Notes"
          >
            <button className="btn btn-sm btn-primary btn-square">
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
          className="tooltip tooltip-primary tooltip-top hover:tooltip-open"
          data-tip="Save Notes"
        >
          <button
            onClick={() => {
              EventBus.emit(SAVE_NOTE);
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
            className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
            data-tip="Create New Note"
          >
            <button className="btn btn-sm btn-primary btn-square">
              <i className="w-4">
                <FiPlus className="w-full h-full" />
              </i>
            </button>
          </div>
        </Link>
      </If>

      {/* ----- edit ----- */}
      <If isTrue={pathname !== EDITOR && pathname !== MY_NOTES}>
        <div
          className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
          data-tip="Edit Note"
        >
          <button
            onClick={handleGoToEdit}
            className="btn btn-sm btn-primary btn-square"
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
            className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
            data-tip="Night Mode"
          >
            <button
              className="btn btn-primary btn-sm btn-square"
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
            className="tooltip tooltip-top tooltip-primary hover:tooltip-open"
            data-tip="Light Mode"
          >
            <button
              className="btn btn-primary btn-sm btn-square"
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
  );
});

export default Footer;
