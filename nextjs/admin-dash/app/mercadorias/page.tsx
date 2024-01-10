import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableGoods from "@/components/Tables/TableGoods";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "MstarSupplyAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for MstarSupplyAdmin Next.js",
  // other metadata
};

// export default function Home() {
//   return (
//     <>
//       <Mercadoria />
//     </>
//   );
// }

const MercadoriasPage = () => {
  return (
    <>
      <Breadcrumb pageName="Mercadorias" />

      <div className="flex flex-col gap-10">
        <TableGoods />
      </div>
    </>
  );
};

export default MercadoriasPage;