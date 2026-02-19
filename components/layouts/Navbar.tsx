"use client";

import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useTheme } from "next-themes";

interface Navbar5Props {
  className?: string;
}

const Navbar = ({ className }: Navbar5Props) => {
  const { theme, setTheme } = useTheme();
  const navItems = [
    {
      id: 1,
      name: "Home",
      slug: "/",
    },
    {
      id: 2,
      name: "Meals",
      slug: "/meals",
    },
    {
      id: 3,
      name: "Providers",
      slug: "/providers",
    },
  ];
  return (
    <section className={cn("py-4 px-4 sm:px-0", className)}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter">
              MealMate
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    href={item.slug}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button>Sign in</Button>
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>

              <SheetContent side="top" className="max-h-screen overflow-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <span className="text-lg font-semibold tracking-tighter">
                        MealMate
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col p-2">
                  <div className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <Link href={item.slug} key={item.id}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <Button>Sign in</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
