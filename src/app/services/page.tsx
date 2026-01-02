import FeatureList from "@/Components/FeatureList";

export default function Services () {
    return (
      <section className="">
        <FeatureList
          heading="Services We Offer"
          subheading="Simplify everything"
          layout="list"
          features={[
            {
              title: "Basic Site",
              description:
                "4x Pages, Static, optimized site with email contacting engagement",
              icon: "",
              imageUrl: "",
              imageSize: 100,
              link: { label: "Find out more", href: "/engagement" },
            },
          ]}
        />
      </section>
    );
}