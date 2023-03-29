import { memo, useEffect, useState } from "react";
import { themeChange } from "theme-change";
import Link from "next/link";
import { useRouter } from "next/router";

import IfElse from "@/components/IfElse";
import If from "@/components/If";

import { FiMoon, FiSun, FiMenu, FiEdit3, FiPlus, FiHome } from "react-icons/fi";

import { EDITOR, HOME, MY_NOTES } from "@/utils/locationPathName";

const Footer = memo(function Footer() {
  const [theme, setTheme] = useState("");
  const router = useRouter();
  const { pathname } = router;
  const {
    query: { id },
  } = router;

  useEffect(() => {
    themeChange(false);
    const theme = localStorage.getItem("theme");
    setTheme(() => (theme ? theme : "winter"));
  }, []);

  const handleGoToEdit = () => {
    router.push(`${EDITOR}/${id}`);
  };

  return (
    <div className="flex justify-center gap-3 py-2">
      {/* ----- Home ----- */}
      <If isTrue={pathname !== HOME}>
        <Link href={HOME}>
          <div
            className="tooltip tooltip-top hover:tooltip-open"
            data-tip="Home"
          >
            <button className="btn btn-sm btn-outline btn-square">
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
            className="tooltip tooltip-top hover:tooltip-open"
            data-tip="All Notes"
          >
            <button className="btn btn-sm btn-outline btn-square">
              <i className="w-4">
                <FiMenu className="w-full h-full" />
              </i>
            </button>
          </div>
        </Link>
      </If>

      {/* ----- add new note ----- */}
      <If isTrue={pathname !== EDITOR}>
        <Link href={EDITOR}>
          <div
            className="tooltip tooltip-top hover:tooltip-open"
            data-tip="Add New Note"
          >
            <button className="btn btn-sm btn-outline btn-square">
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
          className="tooltip tooltip-top hover:tooltip-open"
          data-tip="Edit Note"
        >
          <button
            onClick={handleGoToEdit}
            className="btn btn-sm btn-outline btn-square"
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
            className="tooltip tooltip-top hover:tooltip-open"
            data-tip="Night Mode"
          >
            <button
              className="btn btn-outline btn-sm btn-square"
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
            className="tooltip tooltip-top hover:tooltip-open"
            data-tip="Light Mode"
          >
            <button
              className="btn btn-outline btn-sm btn-square"
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
