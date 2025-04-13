import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSidebarSection } from "./sections/NavigationSidebarSection";

export const QuickCommerce = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Navigation Sidebar */}
      <NavigationSidebarSection />

      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <HeaderSection />

        {/* Main Content Area */}
        <div className="flex-1 flex m-5 bg-neutral-50 rounded-lg border border-solid border-[#ebebeb] overflow-hidden">
          <div className="relative w-full">
            {/* Decorative circles */}
            <div className="absolute left-0 w-[594px] h-[594px] top-0 rounded-full border-[3px] border-solid border-[#ffffff1f]">
              <div className="relative w-[381px] h-[381px] top-[104px] left-[103px] rounded-full border-[3px] border-solid border-[#ffffff1f]" />
            </div>

            <div className="absolute right-0 w-[594px] h-[594px] top-0 rounded-full border-[3px] border-solid border-[#ffffff1f]">
              <div className="relative w-[381px] h-[381px] top-[104px] left-[103px] rounded-full border-[3px] border-solid border-[#ffffff1f]" />
            </div>

            {/* Main Content Section */}
            <MainContentSection />
          </div>
        </div>
      </div>
    </div>
  );
};
