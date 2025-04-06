import webpack from 'webpack';
import path from 'path';
import { buildConfig } from './config/build/buildConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3001;

  const config: webpack.Configuration = buildConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
