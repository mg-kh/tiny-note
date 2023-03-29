import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import {
  FiMoon,
  FiSun,
  FiMenu,
  FiEdit3,
  FiPlus,
  FiHome,
  FiChevronLeft,
} from "react-icons/fi";

const Home = () => {
  return (
    <MainLayout
      main={
        <>
          <div>
            <h1 className="mb-3 text-3xl">Introduction</h1>
            <p>
              Tiny note is a simple and effective note taking website.All the
              notes are stored in the browser's <b>Indexdb</b>.This project is
              open-source and all the source code can be found{" "}
              <Link ink href="https://github.com/mg-kh/tiny-note">
                <span className="text-blue-500 underline">here</span>
              </Link>
              .
            </p>
          </div>

          <div className="divider"></div>

          <div>
            <h1 className="mb-3 text-3xl">Icon Explanation</h1>
            <div className="grid gap-3">
              <div className="flex items-center gap-2">
                <kbd className="kbd kbd-md">
                  <FiChevronLeft />
                </kbd>
                <p>Back Button</p>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="kbd kbd-md">
                  <FiMenu />
                </kbd>
                <p>All Notes</p>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="kbd kbd-md">
                  <FiPlus />
                </kbd>
                <p>Create New Note</p>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="kbd kbd-md">
                  <FiEdit3 />
                </kbd>
                <p>Edit Note</p>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="kbd kbd-md">
                  <FiSun />
                </kbd>
                <p>Light Mode</p>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="kbd kbd-md">
                  <FiMoon />
                </kbd>
                <p>Dark Mode</p>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Home;
