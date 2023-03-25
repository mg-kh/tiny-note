import SideBar from "@/components/SideBar";
import React, { useState } from "react";
import useEventBus from "@/hooks/useEventBus";
import Alert from "@/components/Alert";

const MainLayout = ({ main, editBtn, saveBtn }) => {
  return (
    <>
      <section className="container">
        <div className="flex gap-10">
          <aside className="sticky top-0 self-start hidden w-2/12 p-3 md:block">
            <SideBar editBtn={editBtn} saveBtn={saveBtn} />
          </aside>
          <main className="w-full py-3 md:w-10/12">
            <Alert />
            {main}
          </main>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
