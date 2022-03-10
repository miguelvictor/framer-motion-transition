import type { AppProps } from "next/app"

import '../styles/globals.css';

import { AnimatePresence } from 'framer-motion';

import { useStore } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const { direction } = useStore()

  return (
    <>
      <AnimatePresence>
        <Component key={(Component as any).animateKey} {...pageProps} />
      </AnimatePresence>
      <div className="fixed top-4 right-4 text-2xl px-4 py-2 bg-white rounded-lg">
        {direction ?? "null"}
      </div>
    </>
  )
}

export default MyApp
