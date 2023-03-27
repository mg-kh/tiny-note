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
            color={color}
            setColor={setColor}
            body={body}
            setBody={setBody}
            title={title}
            setTitle={setTitle}
          />
        </>
      }
    />
  );
};

export default EditNote;
