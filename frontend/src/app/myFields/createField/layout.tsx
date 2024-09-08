import { BackgroundImageLayout } from "@/components/BackgroundImageLayout";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { CardContainer } from "@/components/CardContainer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

export default function FieldLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={poppins.className}>
      <Head>
        <title>New Field</title>
        <meta name="description" content="New Field page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundImageLayout imageUrl="https://res.cloudinary.com/djarwlymo/image/upload/v1725509663/agricultura-ecologica_zlcokw.jpg">
        <CardContainer>{children}</CardContainer>
      </BackgroundImageLayout>
    </section>
  );
}
