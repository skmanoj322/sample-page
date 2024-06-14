import { Analytics } from "./ui/icon/Analytics";
import { BB } from "./ui/icon/BB";
import { Business } from "./ui/icon/Business";
import { HomeIcon } from "./ui/icon/Home";
import { Monitor } from "./ui/icon/Monitor";
import { Sound } from "./ui/icon/Sound";

export interface ISidebarProps {}

export function Sidebar() {
  return (
    <div className="flex w-[50px] h-[534px] flex-col justify-around ">
      <div>
        <BB />
      </div>
      <div className="flex flex-col gap-7">
        <HomeIcon />
        <Sound />
        <Monitor />
        <Analytics />
        <Business />
      </div>
    </div>
  );
}
