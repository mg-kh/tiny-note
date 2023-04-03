import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";

import Hook from "./Hook";

const EditNote = () => {
  const {
    title,
    body,
    color,
    // actions
    setBody,
    setColor,
    setTitle,
  } = Hook();
  return (
    <MainLayout
      main={
        <>
          <RTEditor
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
            color={color}
            setColor={setColor}
          />
        </>
      }
    />
  );
};

export default EditNote;
