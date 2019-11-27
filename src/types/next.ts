import { NextPageContext } from 'next';
import { Store } from '../store/types';

export interface PageCtx extends NextPageContext {
    store: Store;
}
