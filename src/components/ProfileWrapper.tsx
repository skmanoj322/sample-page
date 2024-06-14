import * as React from "react";
// import { CoinIcon } from "./ui/icon/Coin";

export interface IProfileWrapperProps {}

export default class ProfileWrapper extends React.PureComponent<IProfileWrapperProps> {
  public render() {
    return (
      <div>
        <div className="flex   rounded-[24px] border gap-[6px] p-2 ">
          {/* <CoinIcon className="" /> */}
          <div className="flex font-[500] text-xs ">
            <div>Manson Xavior</div>
          </div>
        </div>
      </div>
    );
  }
}
