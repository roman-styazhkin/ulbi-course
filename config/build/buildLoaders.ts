import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|tsx|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract',
            { locales: ['en', 'ru'], keyAsDefaultValue: true },
          ],
        ],
      },
    },
  };

  const svgLoader = {
    test: /\.svg$/,
    use: '@svgr/webpack',
  };

  const cssLoader = {
    test: /\.((c|sa|sc)ss)$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.endsWith('.module.scss'),
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
            namedExport: false,
          },
        },
      },
      'sass-loader',
    ],
  };

  return [
    fileLoader,
    svgLoader,
    cssLoader,
    babelLoader,
    typescriptLoader,
  ];
}
