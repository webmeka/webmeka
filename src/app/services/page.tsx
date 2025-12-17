import ServicesSection from "@/components/services-section";
import BackButton from "@/components/ui/back-button";

export default function WebmekaServices() {
  return (
    <div className="mb-20">
    <ServicesSection paused={false} />
    <BackButton/>
    </div>
  );
}
