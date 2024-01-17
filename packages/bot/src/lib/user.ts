import {config} from './config';
import {storeEngine} from './store';

import type {User, Content} from '../type';

export const userColStore = await storeEngine.collection<User>(config.storeStat.users);
export const contentColStore = await storeEngine.collection<Content>(config.storeStat.content);
