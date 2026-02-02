import { Philosopher, Jost } from 'next/font/google';

export const philosopher = Philosopher({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: '400',
});

export const jost = Jost({
  variable: '--font-body',
  subsets: ['latin'],
});
