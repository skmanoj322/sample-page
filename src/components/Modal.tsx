import ModalFrame from "../assets/Frame 1171276292.png";
import { Story } from "./Story";
import { Button } from "./ui/Button";
import { WhiteButton } from "./ui/WhiteButton";
// import { backGround } from "../assets/design.png";

export interface IModalProps {}

export function Modal() {
  return (
    <div className="flex flex-col min-w-[1295px]  border rounded-[16px] m-1  gap-2 bg-[#FFFFFF]">
      <div className="relative">
        <img src={ModalFrame} className="" />
        <div className="absolute top-2 w-[1000px] bg-white flex flex-col">
          <div className="" id="frist-box flex"></div>
          <div className="second-box"></div>
        </div>
      </div>
      <div className="flex justify-between max-w-[1270px]">
        <div className="flex justify-around p-1 gap-3">
          <WhiteButton text="Best Relevance" />
          <div className="flex justify-center items-center max-w-[177px] h-[44px] font-mono text-[#1F1F1F] font-[500] text-xs">
            App Creators
          </div>
        </div>
        <Button w="187" h="54" text="Add creators" />
      </div>
      <div className=" pl-4 text-sm"> Showing 234 Results</div>
      <div className="p-3">
        <Story />
      </div>
      <div className="p-3">
        <Story />
      </div>
    </div>
  );
}
