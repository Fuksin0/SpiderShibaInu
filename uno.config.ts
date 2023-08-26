import { defineConfig } from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  // ...
  transformers: [
    transformerCompileClass({
      trigger: /(["'`]):uno(?:-)?(?<name>[^\s\1]+)?:\s([^\1]*?)\1/g
    }),
  ],
})