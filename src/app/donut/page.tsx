'use client';

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const DynamicDonutComponent = dynamic(
  () => import("../components/DonutComponent").then((module) => module.default),
  { ssr: true }
);

const DonutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-black">
      <h1 className="text-center mb-5 text-green-500">{'/********** TAKE THIS FREE DONUT **********/'}</h1>
      <DynamicDonutComponent />
    </div>
  );
};

export default DonutPage;
