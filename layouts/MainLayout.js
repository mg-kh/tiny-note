import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

const MainLayout = ({ main, editBtn, addBtn, myNoteBtn }) => {
  return (
    <>
      <section className="container">
        <div className="flex gap-5">
          <aside className="sticky top-0 self-start hidden w-2/12 md:block h-screen py-3 border-r-2 border-dashed border-gray-700/70">
            <SideBar editBtn={editBtn} addBtn={addBtn} myNoteBtn={myNoteBtn} />
          </aside>
          <main className="w-full p-3 md:w-10/12">
            <Alert />
            {main}
          </main>
          <footer className="fixed bottom-0 w-full left-0 md:hidden">
            <Footer editBtn={editBtn} addBtn={addBtn} myNoteBtn={myNoteBtn} />
          </footer>
        </div>
      </section>
    </>
  );
};

export default MainLayout;
