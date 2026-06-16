import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight text-center">
          Empower Your Business with Our Solutions
        </h1>
      </div>
      <div>
        <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight text-center mt-10">
          Modern custom built web applications, mobile applications
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-20">
        <Card className="relative mx-auto w-full max-w-lg pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="/mobitel.jpg"
            alt="Mobitel"
            className="relative z-20 aspect-video w-full object-contain"
          />
          <CardHeader>
            <CardTitle>Custom-built</CardTitle>
            <CardDescription>
              Every project designed to fit your exact needs.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative  max-w-lg pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="/laptop.jpg"
            alt="Mobitel"
            className="relative z-20 aspect-video w-full object-contain"
          />
          <CardHeader>
            <CardTitle>End-to-end</CardTitle>
            <CardDescription>
              From concept to launch — all in one place.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative   pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="/mobitel-results.jpg"
            alt="Mobitel"
            className="relative z-20 aspect-video w-full object-contain"
          />
          <CardHeader>
            <CardTitle>Proven results</CardTitle>
            <CardDescription>
              Used by leading hospitality brands across Europe.{" "}
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="relative mx-auto w-full  pt-0">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="/rise.jpg"
            alt="Mobitel"
            className="relative z-20 aspect-video w-full object-contain"
          />
          <CardHeader>
            <CardTitle>Innovative approach</CardTitle>
            <CardDescription>
              Blending creativity, technology, and strategy
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
