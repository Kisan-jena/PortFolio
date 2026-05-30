import { HorizontalScaleSeparator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-red-00 py-2 h-00">
        <h1 className="bg-red-00">
          Home Page
        </h1>
      </section>

      {/* Full-width HorizontalScale — breaks out of Container */}
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <HorizontalScaleSeparator />
      </div>

      <div className="bg-red-00 h-00">nn</div>

      {/* Rest of page content below */}
    </>
  );
}
