// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Snavirus',
      cssVariable: '--font-snavirus',
      provider: fontProviders.local(),
      options: {
        variants: [{ src: ['./src/assets/fonts/snavirus.regular.otf'] }]
      }
    },
    {
      name: 'Libre Barcode 128 Text',
      cssVariable: '--font-barcode-128-text',
      provider: fontProviders.fontsource()
    },
    {
      name: 'EB Garamond',
      cssVariable: '--font-eb-garamond',
      provider: fontProviders.fontsource(),
      weights: [400, 800]
    },
    {
      name: 'Lilex',
      cssVariable: '--font-lilex',
      provider: fontProviders.fontsource()
    },
    {
      name: 'Radley',
      cssVariable: '--font-radley',
      provider: fontProviders.fontsource()
    },
    {
      name: 'IM Fell DW Pica',
      cssVariable: '--font-im-fell-dw-pica',
      provider: fontProviders.fontsource()
    }
  ]
})
