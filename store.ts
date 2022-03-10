import create from 'zustand';

export type Direction = "up" | "down" | "left" | "right" | null
interface StoreShape {
  direction: Direction
  setDirection: (direction: Direction) => void
}

export const useStore = create<StoreShape>(set => ({
  direction: null,
  setDirection: direction => set({ direction }),
}))

export const duration = 1
