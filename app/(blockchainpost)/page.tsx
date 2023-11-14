import BlogSection from "@/components/BlogSection";
import Container from "@/components/Container";
import H1Heading from "@/components/H1";

export default function Home() {
  return (
    <Container as="section" className="py-12">
      <div className="py-24 md:pt-32 md:pb-24">
        <H1Heading className="animate-in slide-in-from-left duration-500">
          Educación financiera, el camino hacia la libertad.
        </H1Heading>
      </div>
      <BlogSection />
    </Container>
  );
}
