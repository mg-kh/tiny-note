import { memo, useEffect, useState } from "react";
import { themeChange } from "theme-change";

import IfElse from "./IfElse";

import { FiMenu, FiMoon, FiPlus, FiSun } from "react-icons/fi";

import { EDITOR, MY_NOTES } from "@/utils/locationPathName";
import Link from "next/link";

const SideBar = memo(function SideBar({ editBtn, saveBtn }) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    setTheme(() => (theme ? theme : "winter"));
  }, []);

  return (
    <div className="card">
      <Link className="pb-2" href={EDITOR}>
        <button className="gap-2 btn btn-sm btn-outline btn-block">
          <i className="w-4">
            <FiPlus className="w-full h-full" />
          </i>
          <span>New Note</span>
        </button>
      </Link>
      <div className="py-2 card-actions">
        {editBtn}
        <Link href={MY_NOTES}>
          <div className="tooltip hover:tooltip-open" data-tip="All Notes">
            <button className="btn btn-sm btn-outline btn-square">
              <i className="w-4">
                <FiMenu className="w-full h-full" />
              </i>
            </button>
          </div>
        </Link>
        {saveBtn}
      </div>
      <div className="py-2 card-actions">
        <IfElse
          isTrue={theme === "winter"}
          ifBlock={
            <button
              className="btn btn-outline btn-sm btn-square"
              data-set-theme="dark"
              onClick={() => setTheme("dark")}
            >
              <i className="w-4">
                <FiMoon className="w-full h-full" />
              </i>
            </button>
          }
          elseBlock={
            <button
              className="btn btn-outline btn-sm btn-square"
              data-set-theme="winter"
              onClick={() => setTheme("winter")}
            >
              <i className="w-4">
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
