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

const RTEditor = forwardRef(function RTEditor(
  { body, setBody, readOnly = false },
  ref
) {
  return (
    <div>
      <div className="py-3">
        <input
          disabled={readOnly}
          ref={ref}
          type="text"
          placeholder="Title Here"
          className="w-full px-0 text-xl font-bold bg-transparent focus:outline-none"
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
