import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

const MainLayout = ({ main }) => {
  return (
    <>
      <section className="container">
        <aside className="fixed self-start hidden top-2 right-2 md:block z-50">
          <SideBar />
        </aside>
        <main className="w-full py-3 pb-14">
          <Alert />
          {main}
        </main>
        <footer className="fixed bottom-0 left-0 w-full bg-primary/10 backdrop-blur-md md:hidden">
          <Footer />
        </footer>
      </section>
    </>
  );
};

export default MainLayout;
