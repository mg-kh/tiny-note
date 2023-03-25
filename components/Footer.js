import { memo, useEffect, useState } from "react";
import { themeChange } from "theme-change";

import IfElse from "./IfElse";

import { FiMenu, FiMoon, FiPlus, FiSun } from "react-icons/fi";

import { EDITOR, MY_NOTES } from "@/utils/locationPathName";
import Link from "next/link";

const Footer = memo(function Footer({ editBtn, saveBtn }) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    setTheme(() => (theme ? theme : "winter"));
  }, []);

  return (
    <div className="py-2 flex justify-center gap-3">
      <Link href={MY_NOTES}>
        <div className="tooltip hover:tooltip-open" data-tip="All Notes">
          <button className="btn btn-sm btn-outline btn-square">
            <i className="w-4">
              <FiMenu className="w-full h-full" />
            </i>
          </button>
        </div>
      </Link>
      {editBtn}
      <Link href={EDITOR}>
        <button className="btn btn-sm btn-outline btn-square">
          <i className="w-4">
            <FiPlus className="w-full h-full" />
          </i>
        </button>
      </Link>
      {saveBtn}
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
