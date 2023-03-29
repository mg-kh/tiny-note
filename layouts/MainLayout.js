import Alert from "@/components/Alert";
import Footer from "@/components/Navigations/Footer";
import SideBar from "@/components/Navigations/SideBar";

import Head from "next/head";

const MainLayout = ({ main }) => {
  return (
    <>
      <Head>
        <title>Tiny Note</title>
        <meta name="title" content="Tiny Note" />
        <meta
          name="description"
          content="Simple and effective note taking website."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiny-note.vercel.app/" />
        <meta property="og:title" content="Tiny Note" />
        <meta
          property="og:description"
          content="Simple and effective note taking website."
        />
        <meta property="og:image" content="/tiny-note-1200-630.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tiny-note.vercel.app/" />
        <meta property="twitter:title" content="Tiny Note" />
        <meta
          property="twitter:description"
          content="Simple and effective note taking website."
        />
        <meta property="twitter:image" content="/tiny-note-1200-630.png" />
      </Head>

      <section className="container">
        <aside className="fixed -translate-y-1/2 top-1/2 z-50 self-start hidden right-2 md:block">
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
