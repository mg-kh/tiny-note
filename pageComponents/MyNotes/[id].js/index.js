import Hook from "./Hook";

import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";

const SingleNote = () => {
  const {
    title,
    body,
    //action
    setBody,
  } = Hook();

  return (
    <MainLayout
      main={
        <>
          <RTEditor
            title={title}
            body={body}
            setBody={setBody}
            readOnly={true}
          />
        </>
      }
    />
  );
};

export default SingleNote;
