import dynamic from "next/dynamic";
import { GithubPicker } from "react-color";
import "react-quill/dist/quill.snow.css";
import { FiRefreshCw } from "react-icons/fi";
import cn from "classnames";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const formats = [
  ["bold", "italic", "underline", "strike", "link"],
  [{ header: [1, 2, 3, false] }],
  ["blockquote", "code-block"],
  [{ color: [] }, { background: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
];

const RTEditor = ({
  title,
  setTitle,
  body,
  setBody,
  readOnly = false,
  color,
  setColor,
  isAutoSaving,
  setIsAutoSaving = () => {},
}) => {
  return (
    <div>
      <div className="">
        {!readOnly && (
          <div className="gap-2 py-2 mb-2 badge badge-primary fixed top-1 z-20">
            <i className={cn({ "animate-spin": isAutoSaving })}>
              <FiRefreshCw />
            </i>
            <p className="text-xs">auto saving</p>
          </div>
        )}

        <input
          disabled={readOnly}
          type="text"
          defaultValue={title}
          placeholder="Title Here ..."
          className={cn(
            "w-full p-0 text-xl font-bold bg-transparent focus:outline-none",
            { "mt-5": !readOnly }
          )}
          onChange={(e) => setTitle(e.target.value)}
          onClick={() => setIsAutoSaving(true)}
          onBlur={() => setIsAutoSaving(false)}
        />

        {!readOnly && (
          <div className="flex items-center gap-3 py-2">
            <div className="dropdown">
              <div
                tabIndex={0}
                style={{ backgroundColor: color }}
                className="w-8 h-4 border rounded-md cursor-pointer border-primary"
              ></div>
              <div className="pt-2 border-none dropdown-content menu rounded-box w-52">
                <GithubPicker
                  onChangeComplete={() =>
                    setTimeout(() => setIsAutoSaving(false), 100)
                  }
                  onChange={(color) => {
                    setColor(color.hex);
                    setIsAutoSaving(true);
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
        onFocus={() => setIsAutoSaving(true)}
        onBlur={() => setIsAutoSaving(false)}
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
};

export default RTEditor;
