import webpack from "webpack";
import {buildConfig} from "./config/buildConfig";
import {BuildEnv, BuildPaths} from "./config/types/config";
import path from "path";
export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
    }

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