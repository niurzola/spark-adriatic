import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div>
      <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight text-center">
        Careers
      </h1>
      <Card className="relative mx-auto w-full max-w-lg pt-0 mt-20">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="/posao.jpg"
          alt="Poslovan čovjek"
          className="relative z-20 aspect-video w-full object-contain"
        />
        <CardHeader>
          <CardTitle>Front-end developer</CardTitle>
          <CardDescription>
            Currently searching for a front-end junior developer
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">Contact Us</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
