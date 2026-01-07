import React from "react";
import OilgasSection from "./ui/OilgasSection/OilgasSection";
import { NewHeader } from "./NewHeader";
import { NewFooter } from "./NewFooter";
import { GoToTop } from "./GoToTop";
import { Toaster } from "./ui/sonner";

export const ServeOilGas = () => {
  return (
    <div className="min-h-screen bg-scaleiq-black">
      <NewHeader />
      <main>
        <OilgasSection />
      </main>
      <NewFooter />
      <GoToTop />
      <Toaster />
    </div>
  );
};
