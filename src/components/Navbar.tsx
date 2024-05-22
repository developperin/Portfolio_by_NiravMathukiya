"use client";
import React, { useState } from "react";

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item="Information"></MenuItem>
        </Link>
        <Link href={"/github"}>
          <MenuItem setActive={setActive} active={active} item="Github"></MenuItem>
        </Link>
          {/* <Link href={"/skill"}>
            <MenuItem setActive={setActive} active={active} item="Skill"></MenuItem>
          </Link> */}
        <Link href={"/contect"}>
          <MenuItem setActive={setActive} active={active} item="Contect"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
