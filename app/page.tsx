import { StarsBackgroundDemo } from "@/components/animate-ui/demo/components/backgrounds/stars";

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <img
          src="/tree_3.gif"
          alt="Christmas Tree"
          className="h-[80vh] object-contain"
        />
      </div>

      {/* Stars overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <StarsBackgroundDemo />
      </div>
    </div>
  );
}
