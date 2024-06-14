import * as React from "react";
import { CoinIcon } from "./ui/icon/Coin";

export interface ICoinWrapperProps {
  className: string;
}

export function CoinWrapper() {
  return (
    <div className="flex h-[32px] w-[140px] rounded-[24px] border gap-[6px]  pt-0.5 pr-3 pb-1 pl-1 ">
      <CoinIcon className="" />
      <div className=" flex font-[500] text-[10px] items-center">
        <div>25635 coins</div>
      </div>
    </div>
  );
}
