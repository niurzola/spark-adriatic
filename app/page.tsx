import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Homepage() {
  return (
    <main>
      <div>
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
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">Careers</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div>
          <div className="flex justify-center">
            <h1 className="scroll-m-20 text-center text-5xl font-extrabold tracking-tight text-balance max-w-[1000px]">
              Innovative custom solutions for the Hospitality Industry
            </h1>
          </div>
          <div className="flex justify-center">
            <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight max-w-[750px]">
              We design and develop tailored software and hardware solutions
              that optimize operations, enhance guest experiences, and drive
              business growth.We turn ideas into powerful products.
            </h3>
          </div>
          <div className="flex justify-center">
            <h1>Empower Your Business with Our Solutions</h1>
          </div>
          <div>
            <p>Custom-built</p>
            <p>End-to-end</p>
            <p>Proven results</p>
            <p>Innovative approach</p>
          </div>
        </div>
      </div>
    </main>
  );
}
