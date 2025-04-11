import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daliy News</Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuLink href="/news" className="hover:text-red-500">
                News
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-red-500">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="text-gray-700 shadow-md rounded-md px-5 py-4 space-y-2">
                  <li>
                    <NavigationMenuLink href="/service1">
                      Service 1
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/service2">
                      Service 2
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuLink href="/about" className="hover:text-red-500">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuLink
                href="/contact"
                className="hover:text-red-500"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* light/dark mode btn and login btn */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>
        <div className="lg:hidden">
          <Button variant="default">
            <AiOutlineMenu />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
