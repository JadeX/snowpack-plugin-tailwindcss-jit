<h1 align="center">⚠ Deprecation notice ⚠</h1>
<h2 align="center">
  You no longer need to use this plugin. TailwindCSS JIT is now officially supported by the latest Snowpack out of the box ♥.
  https://github.com/tailwindlabs/tailwindcss/issues/3950#issuecomment-846967828
</h2>

# @jadex/snowpack-plugin-tailwindcss-jit

![MIT License](https://img.shields.io/github/license/jadex/snowpack-plugin-tailwindcss-jit)
[![NPM version](https://img.shields.io/npm/v/@jadex/snowpack-plugin-tailwindcss-jit)](https://www.npmjs.com/package/@jadex/snowpack-plugin-tailwindcss-jit)
[![NPM downloads](https://img.shields.io/npm/dt/@jadex/snowpack-plugin-tailwindcss-jit)](https://www.npmjs.com/package/@jadex/snowpack-plugin-tailwindcss-jit)
[![Node.js Package](https://github.com/jadex/snowpack-plugin-tailwindcss-jit/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/JadeX/snowpack-plugin-tailwindcss-jit/actions/workflows/npm-publish.yml)

This is a simple drag & drop [Snowpack](https://www.snowpack.dev/tutorials/quick-start) plugin that enables [TailwindCSS JIT](https://tailwindcss.com/docs/just-in-time-mode) to work with `snowpack dev` & `snowpack build --watch`.

## Installation

Please make sure you have properly setup your project to work with Snowpack, PostCSS, TailwindCSS JIT and development evironment variables according to respective documentations.

```bash
npm install @jadex/snowpack-plugin-tailwindcss-jit --save-dev
```



```js
/* snowpack.config.js */

module.exports = {
  plugins: ["@snowpack/plugin-postcss", "@jadex/snowpack-plugin-tailwindcss-jit"],
};
```

## Usage
```bash
snowpack dev
```
or
```bash
snowpack build --watch
```

## Why is extra plugin necessary?
Deficiency is in `@snowpack/plugin-postcss` plugin which doesn't support PostCSS Dependency Message API which Tailwind uses to tell what else has changed. When it does, this plugin shouldn't be necessary anymore and will be deprecated.

## Troubleshooting
>Make sure you set `NODE_ENV=development` or Tailwind won't watch your template files for changes.
>
>If you want to control whether Tailwind watches files or not more explicitly, set `TAILWIND_MODE=watch` to override the default `NODE_ENV`-based behavior.

## Disclaimer
Normally I'm not a javascript developer, as far as I can tell this works. Can't guarantee it will work for everyone, so please report any issues. 😐
