import HeroSectionOne from "@/components/hero-section";
import WebmekaNavbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="font-sans flex flex-col overflow-x-hidden items-center justify-items-center min-h-screen">
      <WebmekaNavbar />
      <div className="pt-36">
        <HeroSectionOne />
      </div>
    </div>
  );
}
