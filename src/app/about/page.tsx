import About from "@/Components/About";
export default function AboutP() {
  return (
    <section>
      <About
        companyName="206_CE"
        tagline="Everything Simplified"
        description="At 206_CE we believe that organizations are there to benifit all stakeholders. Progress is only achieved by dynamically adapting to the everchanging business barriers and opertunities."
        mission="We strive to provide companies with bigger profit margins, by automating, optimizing and reducing overheads that are sucking the life out of your business."
        vision="We see companies that are profitable and enduring working in unison to achieve greater goals by collaborating with eachother and aligning their goals automatically to achieve higher returns in quicker timeframes."
        values={[
          "Preservation of Company diversity",
          "Converging organizations into single more powerfull entities",
        ]}
        heroImage=""
      />
    </section>
  );
}
