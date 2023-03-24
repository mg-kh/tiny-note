import SideBar from "@/components/SideBar";
import React from "react";

const MainLayout = ({ main }) => {
  return (
    <>
      <section className="container">
        <div className="flex gap-10">
          <aside className="sticky top-0 self-start hidden md:block w-2/12 p-3">
            <SideBar />
          </aside>
          <main className="w-full md:w-10/12 py-3">{main}</main>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
