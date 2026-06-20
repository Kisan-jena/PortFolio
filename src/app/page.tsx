import { HorizontalLineSeparator } from '@/components/ui/separator';
import { DotGridSpotlight } from '@/components/dot-grid-spotlight';

export default function HomePage() {
  return (
    <div>
      <section className="relative m-2 h-40 rounded-lg py-2 px-3 border border-neutral-300/60 dark:border-neutral-700/60 overflow-hidden">
        <DotGridSpotlight
          spacing={10}
          baseRadius={1}
          activeRadius={2}
          interactionRadius={128}
        />
        <div className="text-4xl h-full flex justify-center items-center z-90 text-white dark:text-black select-none leading-[0.75] kj-logo ">
          COMING SOON
        </div>
      </section>

      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <HorizontalLineSeparator />
      </div>
    </div>
  );
}


{
  /* Full-width HorizontalScale — breaks out of Container
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <HorizontalScaleSeparator />
      </div> */
}