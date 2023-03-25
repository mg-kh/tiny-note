import SideBar from "@/components/SideBar";
import React from "react";

const MainLayout = ({ main, editBtn, saveBtn }) => {
  return (
    <>
      <section className="container">
        <div className="flex gap-10">
          <aside className="sticky top-0 self-start hidden w-2/12 p-3 md:block">
            <SideBar editBtn={editBtn} saveBtn={saveBtn} />
          </aside>
          <main className="w-full py-3 md:w-10/12">{main}</main>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
