'use client';

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const DynamicDonutComponent = dynamic(
  () => import("../components/DonutComponent").then((module) => module.default),
  { ssr: true }
);

const DonutPage = () => {
  return (
    <div className="bg-black w-full h-full">
      <h1 className="text-center mb-5 text-green-500">{'/************** TAKE THIS FREE DONUT **************/'}</h1>
      <DynamicDonutComponent />
    </div>
  );
};

export default DonutPage;
