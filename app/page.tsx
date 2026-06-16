import { Button } from "@/components/ui/button";
export default function Homepage() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="max-w-[1600px]">
          <div className="max-w-[1300px] mt-40">
            <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight text-center">
              Innovative custom solutions for the Hospitality Industry
            </h1>
            <h3 className="mt-15 scroll-m-20 text-left text-4xl font-semibold tracking-tight">
              We design and develop tailored software and hardware solutions
              that optimize operations, enhance guest experiences, and drive
              business growth. We turn ideas into powerful products.
            </h3>
          </div>
          <div className="flex justify-center gap-10 mt-15">
            <Button variant="outline" className="px-10 py-6 text-xl" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
            <Button variant="outline" className="px-10 py-6 text-xl">
              <a href="/about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
