import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MstarSupplyAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for MstarSupplyAdmin Next.js",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
