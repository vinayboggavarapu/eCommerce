import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { StateProvider } from "@/context/states";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </SessionProvider>
  );
}
