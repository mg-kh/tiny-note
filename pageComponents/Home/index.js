import SideBar from "@/components/SideBar";
import RTEditor from "@/components/RTEditor";

const Home = () => {
  return (
    <>
      <section className="container">
        <div className="flex">
          <div className="w-2/12 sticky top-0 self-start p-3">
            <SideBar />
          </div>
          <div className="w-10/12 h-[200vh] p-3">
            <RTEditor />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
