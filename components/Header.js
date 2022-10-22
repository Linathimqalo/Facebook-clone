import React from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/client"

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/*Left */}
      <div className="flex items-center">
        <Image
          width={40}
          height={40}
          layout="fixed"
          src="https://links.papareact.com/5me"
        />

        <div className="flex flex-row ml-2 items-center rounded-full bg-gray-200 p-2">
          <SearchIcon className="h-5 w-5 text-gray-600" />
          <input
            className="ml-2 items-center bg-transparent outline-none placeholder-gray-500
            flex-shrink hidden md:inline-flex"
            type="text"
            placeholder="Search Facebook"
          ></input>
        </div>
      </div>

      {/*Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex items-center space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/*Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/*Prof pic */}
        <Image
        onClick={() => signOut()}
        className="rounded-full cursor-pointer" 
        src={session.user.image}
        width="40"
        height="40"
  layout="fixed"/>

        <p className="font-semibold pr-3 whitespace-nowrap">{session.user.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
