import Grid from "@/components/layout/Grid";
import Hero from "@/components/views/Hero";
import Promotions from "@/components/views/Promotions";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Promotions />
      {/* <Grid /> */}
    </main>
  );
}
