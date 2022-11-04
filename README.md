# react-storybook-emotion-issue
Emotion-react css serialize issue inside storybook with vite builder


## Current setup
> Vitest storybook example with manally installed `@emotion/react`
- vite
- storybook
  - storybook-builder-vite
- @emotion/react
- pnpm

## Issue description
In `App.tsx` on 20th line to `h1` added emotion `css` prop with sample styling. In running  `storybook` styles hasn't applied. In devtools markup inspector on `h1` has `css` prop with `@emotion/react` serialize error text.
