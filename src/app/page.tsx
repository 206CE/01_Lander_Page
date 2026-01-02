
import Hero from "@/Components/Hero";

import Services from "./services/page";
import AboutP from "./about/page";
export default function Home() {
  return (
    <div>
      <main className="">
        <section className="flex justify-center tech-panel ml-10 mr-10">
          <Hero
            title="206_CE"
            tagline="Webdev simplified"
            ctas={[{ label: "Contact Us", href: "/engagement" }]}
            itemformat="btn"
            imageSrc=""
            imageSize={100}
            imageAlt="Logo of company"
          />
        </section>
        <Services />
        <AboutP />
      </main>
    </div>
  );
}
