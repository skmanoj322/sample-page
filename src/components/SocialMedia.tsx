import * as React from "react";
import { Tick } from "./ui/icon/Tick";
import { Instagram } from "./ui/icon/Instagram";

export interface ISocialMediaProps {}

export function SocialMedia() {
  return (
    <div className=" flex  flex-col w-[220px] h-[225px] border border-[#E2E2E2] rounded p-2">
      <div className=" flex w-[180px] ">
        <Tick />
      </div>
      <div className="flex flex-col justify-center items-center p-7  gap-3">
        <Instagram />
        <div className="text-xs">Instagram</div>
        <div className="text-[11px]">@instagram</div>
      </div>
    </div>
  );
}
