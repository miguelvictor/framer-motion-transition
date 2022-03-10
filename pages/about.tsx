import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';

import { Direction, duration, useStore } from '../store';

const variants: Variants = {
  initial: (direction: Direction) => ({
    y: direction === "down" ? "100vh" : 0,
  }),
  enter: (direction: Direction) => ({
    y: 0,
    transition: { duration },
  }),
  exit: (direction: Direction) => ({
    y: direction === "up" ? "100vh" : 0,
    transition: { duration },
  }),
}

export default function About() {
  const router = useRouter()
  const { direction, setDirection } = useStore()

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={direction}
      className="fixed inset-0 bg-red-500 min-h-screen flex items-center justify-center flex-col text-white"
    >
      <h1 className="text-6xl font-extrabold">about page</h1>

      <button
        className="mt-8"
        onClick={() => {
          setDirection("up")
          router.push("/")
        }}
      >
        Go to home page
      </button>
    </motion.div>
  )
}

About.animateKey = "about"
