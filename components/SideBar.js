import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

import IfElse from "./IfElse";

import { FiPlus } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

import Link from "next/link";

const SideBar = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    setTheme(() => (theme ? theme : "winter"));
  }, []);

  return (
    <div className="card">
      <button className="gap-2 btn btn-sm btn-outline">
        <i className="w-4">
          <FiPlus className="w-full h-full" />
        </i>
        <span>New Note</span>
      </button>
      <div className="py-2 card-actions">
        <button className="btn btn-sm btn-outline btn-square">
          <i className="w-4">
            <FiEdit3 className="w-full h-full" />
          </i>
        </button>
        <Link href="/my-notes">
          <button className="btn btn-sm btn-outline btn-square">
            <i className="w-4">
              <FiMenu className="w-full h-full" />
            </i>
          </button>
        </Link>
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
};

export default SideBar;
