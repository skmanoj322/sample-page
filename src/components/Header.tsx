import * as React from "react";
import SearchBar from "./SearchBar";
import { CoinWrapper } from "./CoinWrapper";
import NotificationSvg from "./ui/icon/Notification";
import { SpeakerIcon } from "./ui/icon/Speaker";
import ProfileWrapper from "./ProfileWrapper";

export function Header() {
  return (
    <div className="flex justify-between ">
      <SearchBar />

      <div className="flex gap-2  justify-center items-center">
        <CoinWrapper />
        <NotificationSvg />
        <SpeakerIcon />
        <ProfileWrapper />
      </div>
    </div>
  );
}
