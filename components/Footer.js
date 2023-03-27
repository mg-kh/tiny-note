import { memo, useEffect, useState } from "react";
import { themeChange } from "theme-change";

import IfElse from "./IfElse";

import { FiMenu, FiMoon, FiPlus, FiSun } from "react-icons/fi";

import { EDITOR, MY_NOTES } from "@/utils/locationPathName";
import Link from "next/link";

const Footer = memo(function Footer({ editBtn, addBtn, myNoteBtn }) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    setTheme(() => (theme ? theme : "winter"));
  }, []);

  return (
    <div className="py-2 flex justify-center gap-3">
      {myNoteBtn}
      {editBtn}
      {addBtn}
      <IfElse
        isTrue={theme === "winter"}
        ifBlock={
          <button
            className="btn btn-outline btn-sm"
            data-set-theme="dark"
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
  );
});

export default Footer;
