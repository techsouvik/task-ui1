import { ChevronDownIcon, PlusIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

// Navigation menu data
const channels = [
  { name: "Meta Ads", isActive: false },
  { name: "Google Ads", isActive: false },
  { name: "Quick Commerce", isActive: true },
];

const navigationItems = [
  { name: "Overview", icon: "/dashboard-default.svg", isActive: false },
  {
    name: "Channels",
    icon: "/performance-default.svg",
    hasChildren: true,
    isActive: false,
  },
  { name: "Creatives", icon: "/creative-default.svg", isActive: false },
];

const bottomNavItems = [
  { name: "Help", icon: "/help.svg", isActive: false },
  { name: "Settings", icon: "/settings.svg", isActive: false },
];

export const NavigationSidebarSection = (): JSX.Element => {
  const [isChannelsOpen, setIsChannelsOpen] = React.useState(true);

  return (
    <nav className="flex h-screen w-72">
      <div className="flex flex-col h-full">
        {/* Top header with brand selector */}
        <div className="flex w-full items-center gap-4 pl-[5px] pr-[13.5px] py-5 bg-white">
          <Avatar className="w-10 h-10 rounded-xl">
            <img
              className="w-10 h-10 object-cover"
              alt="Brand logo"
              src="/image-22.png"
            />
          </Avatar>

          <div className="flex items-center justify-between p-1.5 flex-1 bg-[#fcfcfc] rounded-xl border border-solid border-[#0000001f]">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center justify-center gap-2.5 p-[5px] bg-[#2f9d95] rounded-[7px]">
                <span className="font-semibold text-white text-[11px]">SS</span>
              </div>

              <span className="font-semibold text-[#031b15] text-sm">
                Test_brand
              </span>
            </div>

            <img
              className="w-4 h-4"
              alt="Caret up down"
              src="/caretupdown.svg"
            />
          </div>

          <img
            className="w-[16.62px] h-[16.62px]"
            alt="Chevrons left"
            src="/chevrons-left.svg"
          />
        </div>

        {/* Main sidebar content */}
        <div className="flex h-full">
          {/* Icon sidebar */}
          <div className="flex flex-col w-[51px] h-full bg-white">
            <div className="flex flex-col items-center">
              <div className="flex w-[50px] items-center justify-center px-3.5 py-1.5">
                <div className="bg-[url(/image-23.png)] bg-[100%_100%] w-10 h-10 rounded-xl" />
              </div>

              <div className="flex w-[50px] items-center justify-center px-3.5 py-1.5">
                <div className="bg-[#e8e7e7] overflow-hidden w-10 h-10 rounded-xl">
                  <img
                    className="w-10 h-10 object-cover"
                    alt="Brand icon"
                    src="/image-24.png"
                  />
                </div>
              </div>

              <div className="flex w-[50px] items-center justify-center px-3.5 py-1.5">
                <Button
                  variant="outline"
                  className="w-10 h-10 p-0 rounded-xl border-[0.5px] border-[#b4bbb9]"
                >
                  <PlusIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Bottom icons */}
            <div className="flex flex-col items-center gap-[18px] mt-auto mb-6">
              <UsersIcon className="w-5 h-5 text-[#031b15]" />

              <div className="flex items-center justify-center w-7 h-7 p-1.5 bg-[#9105ff] rounded-[32px] border border-solid border-[#ffffff1a]">
                <span className="font-semibold text-white text-xs">SS</span>
              </div>
            </div>
          </div>

          {/* Main navigation menu */}
          <div className="flex flex-col w-[221px] h-full px-4 py-6 bg-[#f8f8f8]">
            <div className="flex flex-col h-full justify-between">
              {/* Top navigation items */}
              <div className="flex flex-col gap-2.5">
                {/* Overview item */}
                <Button
                  variant="ghost"
                  className="flex justify-start gap-3 px-3 py-2 h-auto font-medium text-sm text-[#031b15]"
                >
                  <img
                    className="w-5 h-5"
                    alt="Dashboard icon"
                    src="/dashboard-default.svg"
                  />
                  Overview
                </Button>

                {/* Channels dropdown */}
                <div className="flex flex-col gap-1">
                  <Collapsible
                    open={isChannelsOpen}
                    onOpenChange={setIsChannelsOpen}
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex justify-between w-full px-3 py-2 h-auto font-medium text-sm text-[#031b15]"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            className="w-5 h-5"
                            alt="Performance icon"
                            src="/performance-default.svg"
                          />
                          Channels
                        </div>
                        <ChevronDownIcon className="w-3.5 h-3.5" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4">
                      <div className="flex flex-col gap-1">
                        {channels.map((channel, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className={`flex justify-start px-4 py-1.5 h-auto font-${channel.isActive ? "semibold" : "normal"} text-sm ${
                              channel.isActive
                                ? "bg-[#dfeae8] text-[#027056]"
                                : "text-[#031b15cc]"
                            } rounded-[10px]`}
                          >
                            {channel.name}
                          </Button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Creatives item */}
                <Button
                  variant="ghost"
                  className="flex justify-start gap-3 px-3 py-2 h-auto font-medium text-sm text-[#031b15]"
                >
                  <img
                    className="w-5 h-5"
                    alt="Creative icon"
                    src="/creative-default.svg"
                  />
                  Creatives
                </Button>
              </div>

              {/* Bottom navigation items */}
              <div className="flex flex-col gap-2.5">
                <Button
                  variant="ghost"
                  className="flex justify-start gap-3 px-3 py-2 h-auto font-medium text-sm text-[#031b15cc]"
                >
                  <img className="w-5 h-5" alt="Help icon" src="/help.svg" />
                  Help
                </Button>

                <Button
                  variant="ghost"
                  className="flex justify-start gap-3 px-3 py-2 h-auto font-medium text-sm text-[#031b15]"
                >
                  <img
                    className="w-5 h-5"
                    alt="SettingsIcon icon"
                    src="/settings.svg"
                  />
                  SettingsIcon
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
