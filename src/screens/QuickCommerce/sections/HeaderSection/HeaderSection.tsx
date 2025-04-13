import { BarChart3Icon, CalendarDaysIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const HeaderSection = (): JSX.Element => {
  // Data for delivery service options
  const deliveryServices = [
    { id: "blinkit", name: "Blinkit", imageSrc: "/image-54.png", active: true },
    { id: "zepto", name: "Zepto", imageSrc: "/image-55.png", active: false },
    {
      id: "instamart",
      name: "Instamart",
      imageSrc: "/image-57.png",
      active: false,
    },
  ];

  return (
    <header className="flex flex-col w-full items-start">
      {/* Top navigation bar */}
      <div className="flex items-center justify-between w-full px-6 py-3 bg-white border border-[#ebebeb]">
        <div className="flex items-center gap-1">
          <h1 className="font-medium text-sm tracking-[-0.42px] leading-[18px] text-[#031b15] font-['Mulish',Helvetica]">
            Quick Commerce
          </h1>
        </div>

        <div className="flex items-center justify-end gap-2">
          {/* Chart toggle button */}
          <Button
            variant="outline"
            className="h-10 flex items-center gap-2 px-4 py-2 bg-white rounded-[10px] border-[#d9d9d9] shadow-[0px_1px_4px_#0000000a]"
          >
            <BarChart3Icon className="w-5 h-5" />
            <img className="w-5 h-5" alt="Toggle" src="/bi-toggle-on.svg" />
          </Button>

          {/* Date range selector */}
          <Button
            variant="outline"
            className="h-10 flex items-center gap-2 px-4 py-2 bg-white rounded-[10px] border-[#d9d9d9] shadow-[0px_1px_4px_#0000000a]"
          >
            <CalendarDaysIcon className="w-5 h-5" />
            <span className="font-medium text-sm leading-5 text-[#031b15] font-['Mulish',Helvetica]">
              Aug 01, 024 - Aug 03, 2024
            </span>
            <ChevronDownIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Delivery service selector */}
      <div className="flex items-center w-full px-4 py-3 bg-white border-b border-[#ebebeb]">
        <div className="p-1 bg-white rounded-xl border-[0.5px] border-[#031b151a]">
          <ToggleGroup type="single" defaultValue="blinkit">
            {deliveryServices.map((service) => (
              <ToggleGroupItem
                key={service.id}
                value={service.id}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[10px] ${
                  service.active
                    ? "bg-[#dfeae8] text-[#027056]"
                    : "opacity-30 text-[#031b15b2]"
                }`}
              >
                <div className="relative w-4 h-4">
                  <img
                    className="w-4 h-4 object-cover absolute top-0 left-0"
                    alt={service.name}
                    src={service.imageSrc}
                  />
                </div>
                <span className="font-medium text-sm tracking-[-0.05px] leading-5 whitespace-nowrap font-['Mulish',Helvetica]">
                  {service.name}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
    </header>
  );
};
