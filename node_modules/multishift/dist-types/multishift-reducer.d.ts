import type { MultishiftProps, MultishiftRootActions, MultishiftState, MultishiftStateProps } from './multishift-types';
export declare const multishiftReducer: <Item = any>(state: MultishiftState<Item>, action: MultishiftRootActions<Item>, props: MultishiftProps<Item>) => [MultishiftState<Item>, Partial<MultishiftState<Item>>];
