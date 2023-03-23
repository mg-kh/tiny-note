import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Hook from "./Hooks";

import { IoSaveOutline } from "react-icons/io5";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const formats = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike", "link"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
];

const RTEditor = () => {
  const {
    ref,
    body,
    // actions
    setBody,
    handleInsertNote,
  } = Hook();
  return (
    <div>
      <div>
        <input
          ref={ref}
          type="text"
          placeholder="Title Here"
          className="w-full text-xl font-bold focus:outline-none input"
        />
      </div>
      <ReactQuill
        theme="snow"
        value={body}
        onChange={setBody}
        modules={{
          toolbar: formats,
        }}
      />
      <button onClick={handleInsertNote} className="gap-2 btn">
        <IoSaveOutline />
        <span>Save</span>
      </button>
    </div>
  );
};

export default RTEditor;
