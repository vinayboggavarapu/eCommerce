import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const Content = styled.div`
  background: var(--background);
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>BUY IT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Content className="flex flex-col w-full">
          <Navbar />
        </Content>
      </main>
    </>
  );
}