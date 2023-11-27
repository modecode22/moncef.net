import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-16 bg-dark-900 border-b border-dark-700 px-6  sm:px-12 md:px-16 lg:px-36 flex justify-between items-center">
          <Link href="/" className="hover:bg-primary-500 rounded-full duration-75 transition-colors">
            <Image
              src="/logo.svg"
              alt="Moncef Aissaoui Letter"
              width={40}
              height={40}
            />
          </Link>
      <h3 className="font-semibold text-lg h-full flex justify-center items-center">Moncef Aissaoui Letter</h3>
    </header>
  );
};

export default Header;
