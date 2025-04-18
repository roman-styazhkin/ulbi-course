import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  WebpackPluginInstance,
  DefinePlugin,
  ProgressPlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
    }),
  ];

  if (options.isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new HotModuleReplacementPlugin());
  }

  return plugins;
}
