import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Sidebar } from "./components/SideBar";
import Design from "./assets/design.png";

const Page = () => {
  return (
    <div className="w-full h-full relative">
      <img src={Design} className="absolute" />

      <div className="flex font-mono  justify-center ">
        <div className="fixed left-2 top-[-10px]">
          <Sidebar />
        </div>
        <div className="flex flex-col mt-5 gap-3 z-50">
          <Header />
          <Modal />
        </div>
      </div>
    </div>
  );
};
export default Page;
