import localFont from 'next/font/local'

export const britney = localFont({
  src: [
    {
      path: '../../public/fonts/Britney-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Britney-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Britney-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Britney-Ultra.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-britney',
  display: 'swap',
})

export const britneyVariable = localFont({
  src: '../../public/fonts/Britney-Variable.woff2',
  variable: '--font-britney-variable',
  display: 'swap',
})

export const newTitle = localFont({
  src: [
    {
      path: '../../public/fonts/NewTitle-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NewTitle-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NewTitle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NewTitle-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NewTitle-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-newtitle',
  display: 'swap',
})

export const newTitleVariable = localFont({
  src: '../../public/fonts/NewTitle-Variable.woff2',
  variable: '--font-newtitle-variable',
  display: 'swap',
})

export const melodrama = localFont({
  src: [
    {
      path: '../../public/fonts/Melodrama-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Melodrama-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Melodrama-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Melodrama-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Melodrama-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-melodrama',
  display: 'swap',
})

export const melodramaVariable = localFont({
  src: '../../public/fonts/Melodrama-Variable.woff2',
  variable: '--font-melodrama-variable',
  display: 'swap',
})