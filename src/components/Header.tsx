import * as React from "react";
import SearchBar from "./SearchBar";
import { CoinWrapper } from "./CoinWrapper";
import NotificationSvg from "./ui/icon/Notification";
import { SpeakerIcon } from "./ui/icon/Speaker";
import ProfileWrapper from "./ProfileWrapper";

export function Header() {
  return (
    <div>
      <div className="flex justify-between items-center m-w-[1294px]">
        <SearchBar />

        <div className="flex gap-2">
          <CoinWrapper />
          <NotificationSvg />
          <SpeakerIcon />
          <ProfileWrapper />
        </div>
      </div>
    </div>
  );
}
