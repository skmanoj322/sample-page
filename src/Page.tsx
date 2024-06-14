import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Sidebar } from "./components/SideBar";

const Page = () => {
  return (
    <div className="flex font-mono gap-10 justify-center ">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col mt-5 gap-3">
        <Header />
        <Modal />
      </div>
    </div>
  );
};
export default Page;
