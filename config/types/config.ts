export type BuildMode = 'production' | 'development';

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildPaths {
    html: string;
    output: string;
    entry: string;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}