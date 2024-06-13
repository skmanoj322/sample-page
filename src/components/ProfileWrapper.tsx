import * as React from "react";
import { CoinIcon } from "./ui/icon/Coin";

export interface IProfileWrapperProps {}

export default class ProfileWrapper extends React.PureComponent<IProfileWrapperProps> {
  public render() {
    return (
      <div>
        <div className="flex h-[48px] w-[180px] rounded-[24px] border gap-[6px]  pt-2 pr-3 pb-1 pl-1  ">
          <CoinIcon className="" />
          <span className="font-[500] text-xs">Manson Xavior</span>
        </div>
      </div>
    );
  }
}
