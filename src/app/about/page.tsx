import TrueFocus from "@/components/ui/trueFocus";
import Features from "@/components/webmeka";
import BackButton from "@/components/ui/back-button";

export default function AboutPage() {
  return (
    <section id="about" className="relative mx-auto my-24 flex max-w-7xl flex-col items-center justify-center px-5">
<TrueFocus 
sentence="TEAM WEBMEKA"
manualMode={false}
blurAmount={5}
borderColor="#00FFFF"
animationDuration={0.8}
pauseBetweenAnimations={1}
/>
      <p
        className="mt-10 max-w-2xl text-center text-lg text-neutral-400"
      >
        Team Webmeka was born from a simple observation, brands struggle not because
        they lack ideas, but because they lack clarity and creative
        direction.
      </p>

      <Features />

      <div
        className="max-w-2xl text-center"
      >
        <h2 className="text-2xl font-semibold text-neutral-100">
          Our Philosophy
        </h2>

        <p className="mt-4 text-neutral-400">
          Good design is not decoration. Good design is communication. It
          reduces friction, builds trust, guides attention, and tells a story
          without shouting.
        </p>

        <p className="text-webmeka mt-2">STRATEGY + DESIGN</p>

        <p className="mt-2 text-neutral-400">
          Strategy gives direction. Design gives form. Together, they create
          experiences people remember.
        </p>
      </div>

      <BackButton />
    </section>
  );
}