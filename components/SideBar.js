import { memo, useEffect, useState } from "react";
import { themeChange } from "theme-change";

import IfElse from "./IfElse";

import { FiMoon, FiSun } from "react-icons/fi";

const SideBar = memo(function SideBar({ editBtn, addBtn, myNoteBtn }) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    setTheme(() => (theme ? theme : "winter"));
  }, []);

  return (
    <>
      <div className="flex gap-2 flex-nowrap">
        {myNoteBtn}
        {addBtn}
        {editBtn}
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
    </>
  );
});

export default SideBar;
