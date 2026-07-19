import {
  Package,
  ChartNoAxesCombined,
  Star,
  Tags,
} from "lucide-react";

export const statusData = [
  {
    id: 1,
    icon: Package,
    value: "0",
    title: "Cart Items",
    subtitle: "In your bag",
    iconBg: "bg-lime-300/10",
    iconColor: "text-lime-300",
  },
  {
    id: 2,
    icon: ChartNoAxesCombined,
    value: "$0.00",
    title: "Cart Value",
    subtitle: "Ready to checkout",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    id: 3,
    icon: Star,
    value: "0",
    title: "Top Products",
    subtitle: "Highly rated",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
  },
  {
    id: 4,
    icon: Tags,
    value: "0",
    title: "Categories",
    subtitle: "To explore",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
];