import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  LineChartIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

// Data for the cards
const cardData = [
  {
    title: "Sales (MRP)",
    value: "125.49",
    percentChange: "2.4%",
    isPositive: true,
    comparisonText: "vs 119.69 last month",
    chartSrc: "/frame-1618867302.svg",
  },
  {
    title: "Total Quantity Sold",
    value: "125.49",
    percentChange: "2.4%",
    isPositive: true,
    comparisonText: "vs 119.69 last month",
    chartSrc: "/frame-1618867302.svg",
  },
];

// Data for top cities
const topCitiesData = {
  total: "₹68.2L",
  percentChange: "2.2%",
  isPositive: true,
  cities: [
    {
      name: "New Delhi",
      color: "#6c4fed",
      value: "₹26.5L",
      percentage: "35%",
      change: "1.2%",
      isPositive: true,
    },
    {
      name: "Mumbai",
      color: "#ea6153",
      value: "₹36.4L",
      percentage: "23%",
      change: "3.3%",
      isPositive: false,
    },
    {
      name: "West Bengal",
      color: "#f7c245",
      value: "₹12.2L",
      percentage: "21%",
      change: "2.3%",
      isPositive: false,
    },
    {
      name: "Others",
      color: "#d9d9d9",
      value: "₹24.3L",
      percentage: "9%",
      change: "1.09%",
      isPositive: true,
    },
  ],
};

// Data for SKU level table
const skuData = [
  {
    name: "Protein Bar 100g",
    selected: true,
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    avgRank: "3.2",
    estTraffic: "12,303",
    estImpressions: "25,005",
    ctr: "1.90%",
    details: [
      {
        sales: "₹8,526.32",
        outOfStock: "6.79%",
        totalInventory: "679",
        avgRank: "7",
        estTraffic: "3005",
        estImpressions: "4231",
        ctr: "10",
      },
      {
        sales: "₹7,012.72",
        outOfStock: "3.28%",
        totalInventory: "328",
        avgRank: "4",
        estTraffic: "2960",
        estImpressions: "3657",
        ctr: "45",
      },
      { percentChange: "2.4%", isPositive: true },
    ],
  },
  {
    name: "Choco Bar 100g",
    selected: true,
    sales: "₹8,526.32",
    outOfStock: "6.79%",
    totalInventory: "679",
    avgRank: "7",
    estTraffic: "3005",
    estImpressions: "4231",
    ctr: "10",
    details: [
      {
        sales: "₹7,012.72",
        outOfStock: "3.28%",
        totalInventory: "328",
        avgRank: "4",
        estTraffic: "2960",
        estImpressions: "3657",
        ctr: "45",
      },
      { percentChange: "2.4%", isPositive: true },
    ],
  },
  {
    name: "SKU 3",
    selected: false,
    sales: "₹9313",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    avgRank: "11",
    estTraffic: "1931.9",
    estImpressions: "₹931.9",
    ctr: "1.90%",
  },
  {
    name: "SKU 4",
    selected: false,
    sales: "₹0",
    outOfStock: "0",
    totalInventory: "0",
    avgRank: "0",
    estTraffic: "₹0",
    estImpressions: "₹0",
    ctr: "0.00%",
  },
];

// Data for City level table
const cityData = [
  {
    name: "Delhi",
    selected: true,
    sales: "₹93,132.12",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    avgRank: "3.2",
    estTraffic: "12,303",
    estImpressions: "25,005",
    ctr: "1.90%",
    details: [
      {
        sales: "₹8,526.32",
        outOfStock: "6.79%",
        totalInventory: "679",
        avgRank: "7",
        estTraffic: "3005",
        estImpressions: "4231",
        ctr: "10",
      },
      {
        sales: "₹7,012.72",
        outOfStock: "3.28%",
        totalInventory: "328",
        avgRank: "4",
        estTraffic: "2960",
        estImpressions: "3657",
        ctr: "45",
      },
      { percentChange: "2.4%", isPositive: true },
    ],
  },
  {
    name: "Bengaluru",
    selected: true,
    sales: "₹8,526.32",
    outOfStock: "6.79%",
    totalInventory: "679",
    avgRank: "7",
    estTraffic: "3005",
    estImpressions: "4231",
    ctr: "10",
    details: [
      {
        sales: "₹7,012.72",
        outOfStock: "3.28%",
        totalInventory: "328",
        avgRank: "4",
        estTraffic: "2960",
        estImpressions: "3657",
        ctr: "45",
      },
      { percentChange: "2.4%", isPositive: true },
    ],
  },
  {
    name: "SKU 3",
    selected: false,
    sales: "₹9313",
    outOfStock: "1.68%",
    totalInventory: "931.9",
    avgRank: "11",
    estTraffic: "1931.9",
    estImpressions: "₹931.9",
    ctr: "1.90%",
  },
  {
    name: "SKU 4",
    selected: false,
    sales: "₹0",
    outOfStock: "0",
    totalInventory: "0",
    avgRank: "0",
    estTraffic: "₹0",
    estImpressions: "₹0",
    ctr: "0.00%",
  },
];

// Chart labels
const chartLabels = ["09", "10", "11", "12", "13", "14", "15"];
const yAxisLabels = ["6.0", "4.5", "3.0", "1.5"];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full mx-auto px-4">
      <div className="flex flex-col gap-12">
        {/* Top Cards Section */}
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
            {/* Sales Card */}
            {cardData.map((card, index) => (
              <Card
                key={index}
                className="border border-[#f1f1f1] shadow-[0px_1px_0px_#0000001f] rounded-xl"
              >
                <CardHeader className="flex justify-between items-center p-3 border-b border-[#f1f1f1]">
                  <CardTitle className="text-sm font-semibold text-[#515153] tracking-[-0.26px]">
                    {card.title}
                  </CardTitle>
                  <HelpCircleIcon className="w-4 h-4 text-gray-500" />
                </CardHeader>
                <CardContent className="p-3 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-[#031b15] tracking-[-0.26px]">
                      {card.value}
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-[3px]">
                        {card.isPositive ? (
                          <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                        ) : (
                          <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                        )}
                        <span className="font-bold text-[15px] text-[#1d874f] tracking-[-0.26px]">
                          {card.percentChange}
                        </span>
                      </div>
                      <div className="text-[13px] text-[#031b1599] tracking-[-0.26px]">
                        {card.comparisonText}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col items-center gap-4">
                        {yAxisLabels.map((label, idx) => (
                          <div
                            key={idx}
                            className="text-xs font-medium text-[#8b9097] text-center tracking-[-0.26px]"
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                      <img
                        className="flex-1 h-[107px]"
                        alt="Chart"
                        src={card.chartSrc}
                      />
                    </div>

                    <div className="flex justify-between pl-12 text-xs font-medium text-[#6b7583] text-center tracking-[-0.26px]">
                      {chartLabels.map((label, idx) => (
                        <div key={idx} className="flex-1">
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center gap-2.5 p-3 border-t border-[#f1f1f1]">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#1d874f] rounded-[10px]" />
                      <div className="text-[13px] text-[#7d7d7e] tracking-[-0.26px]">
                        This Month
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-[#e25d33] rounded-[10px]" />
                      <div className="text-[13px] text-[#7d7d7e] tracking-[-0.26px]">
                        Last Month
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}

            {/* Top Cities Card */}
            <Card className="border border-[#f1f1f1] shadow-[0px_1px_0px_#0000001f] rounded-xl h-[292px]">
              <CardHeader className="flex justify-between items-center p-3 border-b border-[#f1f1f1]">
                <CardTitle className="text-sm font-semibold text-[#515153] tracking-[-0.26px]">
                  Top Cities
                </CardTitle>
                <HelpCircleIcon className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent className="h-52 flex flex-col items-center gap-3 px-3 py-2">
                <div className="relative w-[193px] h-[104px]">
                  <div className="relative w-[194px] h-[97px] bg-[url(/ellipse-924.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[71px] h-[91px] top-[5px] left-0"
                      alt="Ellipse"
                      src="/ellipse-925.svg"
                    />
                    <img
                      className="absolute w-[74px] h-[27px] top-0 left-16"
                      alt="Ellipse"
                      src="/ellipse-926.svg"
                    />
                    <img
                      className="absolute w-[38px] h-[35px] top-[9px] left-[130px]"
                      alt="Ellipse"
                      src="/ellipse-927.svg"
                    />
                    <div className="flex flex-col w-[57px] items-center gap-1 absolute top-[35px] left-[67px]">
                      <div className="self-stretch text-[13px] text-[#7d7d7e] text-center tracking-[-0.26px]">
                        Total
                      </div>
                      <div className="self-stretch font-bold text-black text-lg tracking-[-0.26px]">
                        {topCitiesData.total}
                      </div>
                      <div className="flex items-center gap-[3px]">
                        {topCitiesData.isPositive ? (
                          <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                        ) : (
                          <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                        )}
                        <div className="font-medium text-[#1d874f] text-[13px] tracking-[-0.26px]">
                          {topCitiesData.percentChange}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 w-full mb-[-34px]">
                  {topCitiesData.cities.map((city, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start w-full"
                    >
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`w-1.5 h-1.5 bg-[${city.color}] rounded-[10px]`}
                        />
                        <div className="text-[13px] text-[#7d7d7e] tracking-[-0.26px]">
                          {city.name}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="font-bold text-black text-[13px] tracking-[-0.26px]">
                          {city.value}
                        </div>
                        <Badge
                          variant="outline"
                          className="px-1 py-0.5 bg-[#f6f6f6] rounded-sm"
                        >
                          <span className="text-[13px] text-[#7d7d7e] tracking-[-0.26px]">
                            {city.percentage}
                          </span>
                        </Badge>
                        <div className="flex items-center gap-[3px]">
                          {city.isPositive ? (
                            <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                          ) : (
                            <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#f21c1c]" />
                          )}
                          <div
                            className={`font-medium text-${city.isPositive ? "[#1d874f]" : "[#f21c1c]"} text-[13px] tracking-[-0.26px]`}
                          >
                            {city.change}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SKU Level Data Section */}
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col gap-6 w-full rounded-xl overflow-hidden shadow-[0px_1px_0px_#0000001f]">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-[#031b15] tracking-[-0.60px]">
                  SKU level data
                </h2>
                <p className="text-sm text-[#4f4d55]">
                  Analytics for all your SKUs
                </p>
              </div>
              <Button className="bg-[#027056] text-white rounded-[10px] border border-[#d9d9d9] shadow-[0px_1px_4px_#0000000a]">
                <span className="text-sm font-medium">Filters(1)</span>
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="border border-solid border-[#f1f1f1] rounded-lg shadow-[0px_1px_0px_#0000001f] overflow-x-auto">
              <Table>
                <TableHeader className="bg-white">
                  <TableRow>
                    <TableHead className="h-[97px] border-r border-[#f1f1f1] rounded-tl-lg">
                      <div className="flex items-center gap-2">
                        <LineChartIcon className="w-5 h-5" />
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          SKU Name
                        </span>
                      </div>
                    </TableHead>
                    <TableHead
                      colSpan={3}
                      className="text-center border-r border-[#f1f1f1]"
                    >
                      <span className="font-bold text-[#013025] text-[15px] tracking-[-0.02px]">
                        Availability
                      </span>
                    </TableHead>
                    <TableHead colSpan={4} className="text-center">
                      <span className="font-bold text-[#013025] text-[15px] tracking-[-0.02px]">
                        Visibility
                      </span>
                    </TableHead>
                  </TableRow>
                  <TableRow>
                    <TableHead className="border-r border-[#f1f1f1]"></TableHead>
                    <TableHead className="border-r border-[#f1f1f1]">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Sales
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="border-r border-[#f1f1f1]">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Out of Stock
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="border-r border-[#f1f1f1]">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Total Inventory
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Average Rank
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Est. Traffic
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Est. Impressions
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="rounded-tr-lg">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Cli
                        </span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {skuData.map((sku, index) => 
                    !sku.name ? null : (
                    <React.Fragment key={index}>
                      <TableRow
                        className={
                          index % 2 === 0 ? "bg-[#f6f6f6]" : "bg-[#fcfcfc]"
                        }
                      >
                        <TableCell className="border-r border-[#f1f1f1] h-12">
                          <div className="flex items-center gap-2">
                            {sku.selected ? (
                              <img
                                className="w-[18px] h-[18px]"
                                alt="Selected"
                                src="/selected.svg"
                              />
                            ) : (
                              <Checkbox className="w-[18px] h-[18px] rounded-[3px] border-[#cdd1d0]" />
                            )}
                            <span className="font-semibold text-[#0a090b] text-[15px] tracking-[-0.02px] underline">
                              {sku.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="border-r border-[#f1f1f1] text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {sku.sales}
                          </span>
                        </TableCell>
                        <TableCell className="border-r border-[#f1f1f1] text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {sku.outOfStock}
                          </span>
                        </TableCell>
                        <TableCell className="border-r border-[#f1f1f1] text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {sku.totalInventory}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {sku.avgRank}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {sku.estTraffic}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {sku.estImpressions}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {sku.ctr}
                          </span>
                        </TableCell>
                      </TableRow>

                      {/* Expanded details for selected SKUs */}
                      {sku.selected && sku.details && (
                        <TableRow className="bg-[#f6f6f6] h-[93px]">
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex items-center gap-2">
                              <img
                                className="w-[18px] h-[18px]"
                                alt="Selected"
                                src="/selected.svg"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {sku.details.map((detail, idx) => (
                                <React.Fragment key={idx}>
                                  {detail.sales && (
                                    <span className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]">
                                      {detail.sales}
                                    </span>
                                  )}
                                  {detail.percentChange && (
                                    <div className="flex items-center gap-[3px]">
                                      {detail.isPositive ? (
                                        <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                      ) : (
                                        <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                      )}
                                      <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                        {detail.percentChange}
                                      </span>
                                    </div>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {sku.details.map(
                                (detail, idx) =>
                                  detail.outOfStock && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.05px]"
                                    >
                                      {detail.outOfStock}
                                    </span>
                                  ),
                              )}
                              {sku.details[2] &&
                                sku.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {sku.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {sku.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {sku.details.map(
                                (detail, idx) =>
                                  detail.totalInventory && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.05px]"
                                    >
                                      {detail.totalInventory}
                                    </span>
                                  ),
                              )}
                              <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.05px]">
                                -
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {sku.details.map(
                                (detail, idx) =>
                                  detail.avgRank && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]"
                                    >
                                      {detail.avgRank}
                                    </span>
                                  ),
                              )}
                              {sku.details[2] &&
                                sku.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {sku.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon
                                        className="w-3
.5 h-3.5 text-[#1d874f]"
                                      />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {sku.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {sku.details.map(
                                (detail, idx) =>
                                  detail.estTraffic && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]"
                                    >
                                      {detail.estTraffic}
                                    </span>
                                  ),
                              )}
                              {sku.details[2] &&
                                sku.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {sku.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {sku.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {sku.details.map(
                                (detail, idx) =>
                                  detail.estImpressions && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]"
                                    >
                                      {detail.estImpressions}
                                    </span>
                                  ),
                              )}
                              {sku.details[2] &&
                                sku.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {sku.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {sku.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {sku.details.map(
                                (detail, idx) =>
                                  detail.ctr && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#0f5aff] text-sm tracking-[-0.02px] underline"
                                    >
                                      {detail.ctr}
                                    </span>
                                  ),
                              )}
                              {sku.details[2] &&
                                sku.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#f21c1c]" />
                                    <span className="font-medium text-[#f21c1c] text-sm tracking-[-0.26px]">
                                      4.2%
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}

                  {/* Total Row */}
                  <TableRow className="bg-[#fcfcfc]">
                    <TableCell className="border-r border-[#f1f1f1] rounded-bl-lg">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        Total
                      </span>
                    </TableCell>
                    <TableCell className="border-r border-[#f1f1f1] text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        ₹2,93,132.12
                      </span>
                    </TableCell>
                    <TableCell className="border-r border-[#f1f1f1] text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        16%
                      </span>
                    </TableCell>
                    <TableCell className="border-r border-[#f1f1f1] text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        2931
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        8.3
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        61,985
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        2,61,768
                      </span>
                    </TableCell>
                    <TableCell className="text-center rounded-br-lg">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        1.90%
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* City Level Data Section */}
          <div className="flex flex-col gap-6 w-full rounded-xl overflow-hidden shadow-[0px_1px_0px_#0000001f]">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-[#031b15] tracking-[-0.60px]">
                  City level data
                </h2>
                <p className="text-sm text-[#4f4d55]">
                  Analytics for all your Cities
                </p>
              </div>
              <Button className="bg-[#027056] text-white rounded-[10px] border border-[#d9d9d9] shadow-[0px_1px_4px_#0000000a]">
                <span className="text-sm font-medium">Filters(1)</span>
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="border border-solid border-[#f1f1f1] rounded-lg shadow-[0px_1px_0px_#0000001f] overflow-x-auto">
              <Table>
                <TableHeader className="bg-white">
                  <TableRow>
                    <TableHead className="h-[97px] border-r border-[#f1f1f1] rounded-tl-lg">
                      <div className="flex items-center gap-2">
                        <LineChartIcon className="w-5 h-5" />
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          SKU Name
                        </span>
                      </div>
                    </TableHead>
                    <TableHead
                      colSpan={3}
                      className="text-center border-r border-[#f1f1f1]"
                    >
                      <span className="font-bold text-[#013025] text-[15px] tracking-[-0.02px]">
                        Availability
                      </span>
                    </TableHead>
                    <TableHead colSpan={4} className="text-center">
                      <span className="font-bold text-[#013025] text-[15px] tracking-[-0.02px]">
                        Visibility
                      </span>
                    </TableHead>
                  </TableRow>
                  <TableRow>
                    <TableHead className="border-r border-[#f1f1f1]"></TableHead>
                    <TableHead className="border-r border-[#f1f1f1]">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Sales
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="border-r border-[#f1f1f1]">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Out of Stock
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="border-r border-[#f1f1f1]">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Total Inventory
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Average Rank
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Est. Traffic
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Est. Impressions
                        </span>
                        <ChevronDownIcon className="w-3 h-3" />
                      </div>
                    </TableHead>
                    <TableHead className="rounded-tr-lg">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-[#013025] text-[15px] tracking-[-0.02px]">
                          Cli
                        </span>
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cityData.map((city, index) => 
                    !city.name ? null : (
                    <React.Fragment key={index}>
                      <TableRow
                        className={
                          index % 2 === 0 ? "bg-[#f6f6f6]" : "bg-[#fcfcfc]"
                        }
                      >
                        <TableCell className="border-r border-[#f1f1f1] h-12">
                          <div className="flex items-center gap-2">
                            {city.selected ? (
                              <img
                                className="w-[18px] h-[18px]"
                                alt="Selected"
                                src="/selected.svg"
                              />
                            ) : (
                              <Checkbox className="w-[18px] h-[18px] rounded-[3px] border-[#cdd1d0]" />
                            )}
                            <span className="font-semibold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                              {city.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="border-r border-[#f1f1f1] text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {city.sales}
                          </span>
                        </TableCell>
                        <TableCell className="border-r border-[#f1f1f1] text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {city.outOfStock}
                          </span>
                        </TableCell>
                        <TableCell className="border-r border-[#f1f1f1] text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {city.totalInventory}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {city.avgRank}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {city.estTraffic}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {city.estImpressions}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.02px]">
                            {city.ctr}
                          </span>
                        </TableCell>
                      </TableRow>

                      {/* Expanded details for selected cities */}
                      {city.selected && city.details && (
                        <TableRow className="bg-[#f6f6f6] h-[93px]">
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex items-center gap-2">
                              <img
                                className="w-[18px] h-[18px]"
                                alt="Selected"
                                src="/selected.svg"
                              />
                            </div>
                          </TableCell>
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {city.details.map((detail, idx) => (
                                <React.Fragment key={idx}>
                                  {detail.sales && (
                                    <span className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]">
                                      {detail.sales}
                                    </span>
                                  )}
                                  {detail.percentChange && (
                                    <div className="flex items-center gap-[3px]">
                                      {detail.isPositive ? (
                                        <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                      ) : (
                                        <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                      )}
                                      <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                        {detail.percentChange}
                                      </span>
                                    </div>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {city.details.map(
                                (detail, idx) =>
                                  detail.outOfStock && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.05px]"
                                    >
                                      {detail.outOfStock}
                                    </span>
                                  ),
                              )}
                              {city.details[2] &&
                                city.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {city.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {city.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell className="border-r border-[#f1f1f1]">
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {city.details.map(
                                (detail, idx) =>
                                  detail.totalInventory && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.05px]"
                                    >
                                      {detail.totalInventory}
                                    </span>
                                  ),
                              )}
                              <span className="font-medium text-[#4e5e5a] text-sm tracking-[-0.05px]">
                                -
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {city.details.map(
                                (detail, idx) =>
                                  detail.avgRank && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]"
                                    >
                                      {detail.avgRank}
                                    </span>
                                  ),
                              )}
                              {city.details[2] &&
                                city.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {city.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {city.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {city.details.map(
                                (detail, idx) =>
                                  detail.estTraffic && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]"
                                    >
                                      {detail.estTraffic}
                                    </span>
                                  ),
                              )}
                              {city.details[2] &&
                                city.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {city.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {city.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {city.details.map(
                                (detail, idx) =>
                                  detail.estImpressions && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#4e5e5a] text-sm tracking-[-0.02px]"
                                    >
                                      {detail.estImpressions}
                                    </span>
                                  ),
                              )}
                              {city.details[2] &&
                                city.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    {city.details[2].isPositive ? (
                                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-[#1d874f]" />
                                    ) : (
                                      <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#e25d33]" />
                                    )}
                                    <span className="font-medium text-[#1d874f] text-sm tracking-[-0.26px]">
                                      {city.details[2].percentChange}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-2.5 justify-center items-center">
                              {city.details.map(
                                (detail, idx) =>
                                  detail.ctr && (
                                    <span
                                      key={idx}
                                      className="font-semibold text-[#0f5aff] text-sm tracking-[-0.02px] underline"
                                    >
                                      {detail.ctr}
                                    </span>
                                  ),
                              )}
                              {city.details[2] &&
                                city.details[2].percentChange && (
                                  <div className="flex items-center gap-[3px]">
                                    <ArrowDownRightIcon className="w-3.5 h-3.5 text-[#f21c1c]" />
                                    <span className="font-medium text-[#f21c1c] text-sm tracking-[-0.26px]">
                                      4.2%
                                    </span>
                                  </div>
                                )}
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}

                  {/* Total Row */}
                  <TableRow className="bg-[#fcfcfc]">
                    <TableCell className="border-r border-[#f1f1f1] rounded-bl-lg">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        Total
                      </span>
                    </TableCell>
                    <TableCell className="border-r border-[#f1f1f1] text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        ₹2,93,132.12
                      </span>
                    </TableCell>
                    <TableCell className="border-r border-[#f1f1f1] text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        16%
                      </span>
                    </TableCell>
                    <TableCell className="border-r border-[#f1f1f1] text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        2931
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        8.3
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        61,985
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        2,61,768
                      </span>
                    </TableCell>
                    <TableCell className="text-center rounded-br-lg">
                      <span className="font-bold text-[#0a090b] text-[15px] tracking-[-0.02px]">
                        1.90%
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
