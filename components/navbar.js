import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <p className="mr-4 text-pink-500">Home</p>
          </Link>
          <Link href="/create-nft">
            <p className="mr-6 text-pink-500">Sell NFT</p>
          </Link>
          <Link href="/my-nfts">
            <p className="mr-6 text-pink-500">My NFTs</p>
          </Link>
          <Link href="/dashboard">
            <p className="mr-6 text-pink-500">Dashboard</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
