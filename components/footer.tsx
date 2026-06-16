import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <nav className="border-t mt-auto px-6 py-3 flex items-center flex items-center justify-center gap-16">
      <Link href="/">
        <Image
          src="/logo-transparent.webp"
          alt="logo"
          width={100}
          height={50}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/company/spark-adriatic"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/linkedin1.png" alt="logo" width={50} height={50} />
      </Link>
    </nav>
  );
}
