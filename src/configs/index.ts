import { merge } from 'lodash';
import defaultConfig from './default';
import localConfig from './local';
import stableConfig from './stable';

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>;
};

export type Config = typeof defaultConfig;
export type OverrideConfig = DeepPartial<Config>;

// eslint-disable-next-line import/no-mutable-exports
let config: Config = defaultConfig;

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    config = merge(defaultConfig, localConfig);
}

if (env === 'production') {
    config = merge(defaultConfig, stableConfig);
}

export default config;
