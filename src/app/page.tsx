import { HorizontalScaleSeparator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-red-00 p-2 h-100">Home Page</section>

      {/* Full-width HorizontalScale — breaks out of Container */}
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <HorizontalScaleSeparator />
      </div>

      <div className="bg-red-00 p-2 h-100">
        
      </div>

      {/* Rest of page content below */}
    </>
  );
}
