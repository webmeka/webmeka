"use client";

import Link from "next/link";
import React from "react";

const BackButton = () => {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        href="/"
        className="px-6 py-3 border-2 border-webmeka text-neutral-300 rounded-full hover:bg-webmeka/10 transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default BackButton;