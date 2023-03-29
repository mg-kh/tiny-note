import RTEditor from "@/components/RTEditor";
import MainLayout from "@/layouts/MainLayout";

import Hook from "./Hook";

const EditNote = () => {
  const {
    title,
    body,
    color,
    isAutoSaving,
    // actions
    setBody,
    setColor,
    setTitle,
    setIsAutoSaving,
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
            isAutoSaving={isAutoSaving}
            setIsAutoSaving={setIsAutoSaving}
          />
        </>
      }
    />
  );
};

export default EditNote;
