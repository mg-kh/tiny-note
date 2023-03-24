import { forwardRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const formats = [
  ["bold", "italic", "underline", "strike", "link"],
  [{ header: [1, 2, 3, false] }],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
];

const RTEditor = forwardRef(({ body, setBody, readOnly = false }, ref) => {
  return (
    <div>
      <div className="py-3">
        <input
          ref={ref}
          type="text"
          placeholder="Title Here"
          className="w-full text-xl font-bold focus:outline-none bg-transparent px-0"
        />
      </div>
      <ReactQuill
        readOnly={readOnly}
        theme="snow"
        value={body}
        onChange={setBody}
        modules={{
          toolbar: readOnly ? false : formats,
        }}
      />
    </div>
  );
});

export default RTEditor;
