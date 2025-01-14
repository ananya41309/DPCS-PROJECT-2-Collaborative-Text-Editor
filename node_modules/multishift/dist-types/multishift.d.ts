import type { MultishiftProps, MultishiftReturn } from './multishift-types';
/**
 * Multishift is a hook that provides all the necessary tools for building
 * accessible dropdown components.
 *
 * @remarks
 *
 * It supports `select` and `autocomplete` drop down experiences with built in
 * support for multi-selection.
 *
 * The library borrows (and steals) heavily from `downshift` but also adds some
 * features which are really important for the `remirror` project.
 *
 * - Focus on typescript support
 * - No React Native support
 * - Multi selection support
 * - Render with **only** menu support (fully controlled)
 *
 * Eventually some of the code will be contributed back to the downshift
 * library.
 */
export declare const useMultishift: <Item = any>(props: MultishiftProps<Item>) => MultishiftReturn<Item>;
