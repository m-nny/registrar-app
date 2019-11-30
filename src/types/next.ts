import { NextPageContext } from 'next';
import { Store } from '../store/types';

export interface NextPageWithStore extends NextPageContext {
    store: Store;
}
