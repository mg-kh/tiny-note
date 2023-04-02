import Alert from "@/components/Alert";
import Footer from "@/components/Navigations/Footer";
import SideBar from "@/components/Navigations/SideBar";

const MainLayout = ({ main }) => {
  return (
    <>
      <section className="container">
        <aside className="fixed z-50 self-start hidden -translate-y-1/2 top-1/2 right-2 md:block">
          <SideBar />
        </aside>
        <main className="w-full py-3 pb-16">
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
