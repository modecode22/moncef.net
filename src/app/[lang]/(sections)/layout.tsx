import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">{children}</main>
  );
};

export default layout;
