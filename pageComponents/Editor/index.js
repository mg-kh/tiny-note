import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";

import Hook from "./Hook";

const Editor = () => {
  const {
    ref,
    body,
    // actions
    setBody,
    handleInsertNote,
  } = Hook();
  return (
    <>
      <MainLayout
        main={
          <>
            <RTEditor ref={ref} body={body} setBody={setBody} />
          </>
        }
      />
    </>
  );
};

export default Editor;
