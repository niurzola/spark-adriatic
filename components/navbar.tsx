import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b px-6 py-3 flex items-center">
      <Link href="/">
        <Image
          src="/logo-transparent.webp"
          alt="logo"
          width={100}
          height={50}
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`navigationMenuTriggerStyle() px-6 py-3 text-lg`}
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`navigationMenuTriggerStyle() px-6 py-3 text-lg`}
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`navigationMenuTriggerStyle() px-6 py-3 text-lg`}
            >
              <Link href="/careers">Careers</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={`navigationMenuTriggerStyle() px-6 py-3 text-lg`}
            >
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
