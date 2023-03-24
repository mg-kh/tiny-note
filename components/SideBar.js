import { memo, useEffect, useState } from "react";
import { themeChange } from "theme-change";

import IfElse from "./IfElse";

import { FiEdit3, FiMenu, FiMoon, FiPlus, FiSun } from "react-icons/fi";
import { IoSaveOutline } from "react-icons/io5";

import { EDITOR, MY_NOTES } from "@/utils/locationPathName";
import Link from "next/link";

const SideBar = memo(() => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    setTheme(() => (theme ? theme : "winter"));
  }, []);

  return (
    <div className="card">
      <Link href={EDITOR}>
        <button className="gap-2 btn btn-sm btn-outline btn-block">
          <i className="w-4">
            <FiPlus className="w-full h-full" />
          </i>
          <span>New Note</span>
        </button>
      </Link>
      <div className="py-2 card-actions">
        <button className="btn btn-sm btn-outline btn-square">
          <i className="w-4">
            <FiEdit3 className="w-full h-full" />
          </i>
        </button>
        <Link href={MY_NOTES}>
          <button className="btn btn-sm btn-outline btn-square">
            <i className="w-4">
              <FiMenu className="w-full h-full" />
            </i>
          </button>
        </Link>
        <button className="btn btn-sm btn-outline btn-square">
          <IoSaveOutline />
        </button>
      </div>
      <div className="py-2 card-actions">
        <IfElse
          isTrue={theme === "winter"}
          ifBlock={
            <button
              className="btn btn-outline btn-sm"
              data-set-theme="light"
              onClick={() => setTheme("dark")}
            >
              <i className="w-3">
                <FiMoon className="w-full h-full" />
              </i>
            </button>
          }
          elseBlock={
            <button
              className="btn btn-outline btn-sm"
              data-set-theme="winter"
              onClick={() => setTheme("winter")}
            >
              <i className="w-3">
                <FiSun className="w-full h-full" />
              </i>
            </button>
          }
        />
      </div>
    </div>
  );
});

export default SideBar;
