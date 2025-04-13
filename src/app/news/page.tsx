import Link from "next/link";
import React from "react";

const Newspage = () => {
  return (
    <div>
      <div className="flex gap-2">
        <Link href="/news/sports">Sports</Link>
        <Link href="/news/health">Health</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Newspage;
