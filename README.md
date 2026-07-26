# @nyarthan/pnpm-plugin-base

A strict, reusable base configuration for [pnpm](https://pnpm.io/). It applies safer dependency-installation defaults through pnpm's [`updateConfig`](https://pnpm.io/pnpmfile#updateconfigconfig--config) hook.

## Requirements

- pnpm 11 or newer

## Installation

Install the package as an exact development dependency:

```sh
pnpm add -D @nyarthan/pnpm-plugin-base
```

## Extending the configuration

Create a `.pnpmfile.mjs`.

Wrap the base hook when a project needs additional exceptions or overrides:

```js
import { hooks as baseHooks } from "@nyarthan/pnpm-plugin-base";

export const hooks = {
  ...baseHooks,
  updateConfig(config) {
    const updatedConfig = baseHooks.updateConfig(config);

    updatedConfig.allowBuilds = {
      ...updatedConfig.allowBuilds,
      esbuild: true,
    };

    return updatedConfig;
  },
};
```

Apply project-specific changes after calling the base hook so they take precedence.

## License

[MIT](LICENSE)
