import * as React from "react";
import { SocialMedia } from "./SocialMedia";
import { Youtube } from "./ui/icon/Youtube";
import { WhiteButton } from "./ui/WhiteButton";
import { Button } from "./ui/Button";
import { RupeeButton } from "./ui/RupeeButton";

export interface IStoryProps {}

export function Story() {
  return (
    <div className=" flex max-w-[1221px] h-[225px] border border-[#E2E2E2] rounded-[12px]">
      <div>
        <SocialMedia />
      </div>
      <div className="w-[542px] p-4 flex gap-10">
        <div className="flex  flex-col justify-between">
          <div className="flex gap-7">
            <div className="  flex flex-col gap-2 font-[500]">
              <div className="text-xs text-[#A4A4A4]"> Total Follower</div>
              <div className="text-xs text-[#1F1F1F]"> 645.M</div>
            </div>

            <div className="flex flex-col gap-2 ">
              <div className=" fon text-xs text-[#A4A4A4] "> Total Post</div>
              <div className="text-xs text-[#1F1F1F]"> 12,000</div>
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col gap-4">
              <div className="flex  gap-4">
                <div className="flex ">
                  <Youtube />
                </div>
                <div className="text-xs text-[#A4A4A4] ">@Instagram</div>
              </div>
              <div className="flex gap-2 text-xs ">
                <div className="flex flex-col ] ">
                  <div className="text-[#A4A4A4]">Followers</div>
                  <div>645.M</div>
                </div>
                <div className="flex flex-col ">
                  <div className="text-[#A4A4A4]">Avg</div>
                  <div>320</div>
                </div>
                <div className="flex flex-col ">
                  <div className="text-[#A4A4A4]">Likes</div>
                  <div></div>
                </div>
                <div className="flex flex-col ">
                  <div className="text-[#A4A4A4]">ER</div>
                  <div>0.42%</div>
                </div>
              </div>
            </div>
            <div className="border-[0.25px] border-[#E2E2E2]"></div>
            <div className="flex flex-col gap-4">
              <div className="flex  gap-4">
                <div className="flex ">
                  <Youtube />
                </div>
                <div className="text-xs text-[#A4A4A4] ">@Instagram</div>
              </div>
              <div className="flex gap-2 text-xs ">
                <div className="flex flex-col ] ">
                  <div className="text-[#A4A4A4]">Followers</div>
                  <div>645.M</div>
                </div>
                <div className="flex flex-col ">
                  <div className="text-[#A4A4A4]">Avg</div>
                  <div>320</div>
                </div>
                <div className="flex flex-col ">
                  <div className="text-[#A4A4A4]">Likes</div>
                  <div></div>
                </div>
                <div className="flex flex-col ">
                  <div className="text-[#A4A4A4]">ER</div>
                  <div>0.42%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end ">
          <div className="flex gap-2">
            <RupeeButton />
            <WhiteButton text="View Report" />
            <Button text="Add to Campaign" w="" h="" />
          </div>
        </div>
      </div>
    </div>
  );
}
