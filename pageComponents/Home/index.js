import SideBar from "@/components/SideBar";
import RTEditor from "@/components/RTEditor";

import { IoSaveOutline } from "react-icons/io5";

import Hook from "./Hook";

const Home = () => {
  const {
    ref,
    body,
    // actions
    setBody,
    handleInsertNote,
  } = Hook();
  return (
    <>
      <section className="container">
        <div className="flex">
          <div className="sticky top-0 self-start w-2/12 p-3">
            <SideBar />
          </div>
          <div className="w-10/12 h-[200vh] p-3">
            <RTEditor ref={ref} body={body} setBody={setBody} />
            <button onClick={handleInsertNote} className="gap-2 btn">
              <IoSaveOutline />
              <span>Save</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
