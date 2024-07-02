import { dependencies } from './package.json';
import type { Rspack } from '@rsbuild/core';

export const mfConfig: Rspack.ModuleFederationPluginOptions = {
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:5000/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};