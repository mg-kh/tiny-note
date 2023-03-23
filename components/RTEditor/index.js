import { forwardRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const formats = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike", "link"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
];

const RTEditor = forwardRef(({ body, setBody }, ref) => {
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
    </div>
  );
});

export default RTEditor;
