import LeftBar from "@/components/shared/LeftBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative">
      <div className=" flex">
        <LeftBar />

        <section className="   ">{children}</section>
      </div>
    </main>
  );
};

export default layout;
