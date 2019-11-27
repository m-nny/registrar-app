import { merge } from 'lodash';
import { DeepPartial } from 'utility-types';
import defaultConfig from './default';
import localConfig from './local';
import stableConfig from './stable';

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
