import {MAKEA, NO_MAKEA, NOT_SURE_IF_MAKEA} from './constants';
import choice from './choice';

export default () => choice([MAKEA, NO_MAKEA, NOT_SURE_IF_MAKEA]);
