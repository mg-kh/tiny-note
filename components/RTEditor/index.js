import { forwardRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { SketchPicker } from "react-color";
import { BlockPicker, GithubPicker, SliderPicker } from "react-color";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const formats = [
  ["bold", "italic", "underline", "strike", "link"],
  [{ header: [1, 2, 3, false] }],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
];

const RTEditor = forwardRef(function RTEditor(
  { body, setBody, readOnly = false, color, setColor },
  ref
) {
  return (
    <div>
      <div className="">
        <input
          disabled={readOnly}
          ref={ref}
          type="text"
          placeholder="Title Here ..."
          className="w-full p-0 text-xl font-bold bg-transparent focus:outline-none"
        />

        {!readOnly && (
          <div className="flex items-center gap-3 py-2">
            <div className="dropdown">
              <div
                tabIndex={0}
                style={{ backgroundColor: color }}
                className="w-8 h-4 rounded-md border cursor-pointer"
              ></div>
              <div className="dropdown-content menu pt-2 border-none rounded-box w-52">
                <GithubPicker
                  onChange={(color) => {
                    setColor(color.hex);
                  }}
                  colors={[
                    "#22c55e",
                    "#ea580c",
                    "#1d4ed8",
                    "#d926aa",
                    "#1fb2a5",
                  ]}
                />
              </div>
            </div>
            <p className="text-sm">Choose Color</p>
          </div>
        )}

        {/* <button className="btn btn-sm">Choose Color</button> */}
      </div>
      {readOnly && <div className="divider my-0.5"></div>}
      <ReactQuill
        readOnly={readOnly}
        theme="snow"
        value={body}
        onChange={setBody}
        placeholder="Start typing here ..."
        modules={{
          toolbar: readOnly ? false : formats,
        }}
      />
    </div>
  );
});

export default RTEditor;
