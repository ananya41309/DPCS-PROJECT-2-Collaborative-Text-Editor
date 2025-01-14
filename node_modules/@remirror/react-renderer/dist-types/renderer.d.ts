import { FC } from 'react';
import { RemirrorJSON } from '@remirror/core';
import { MarkMap } from './types';
export declare const Doc: FC<SubRenderTreeProps>;
export interface BaseRenderTreeProps {
    skipUnknownTypes: boolean;
    skipUnknownMarks: boolean;
    markMap: MarkMap;
    typeMap: MarkMap;
    children?: never;
}
export interface SubRenderTreeProps extends BaseRenderTreeProps {
    node: RemirrorJSON;
}
export interface RenderTreeProps extends Partial<BaseRenderTreeProps> {
    json: RemirrorJSON;
}
/**
 * A recursively rendered tree.
 */
export declare const RemirrorRenderer: FC<RenderTreeProps>;
