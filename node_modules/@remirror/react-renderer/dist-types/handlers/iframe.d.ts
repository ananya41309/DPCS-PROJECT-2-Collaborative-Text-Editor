import { FC } from 'react';
import { Literal, RemirrorJSON } from '@remirror/core';
import { MarkMap } from '../types';
type IFrameHandler = FC<{
    node: RemirrorJSON;
    markMap: MarkMap;
}>;
export declare const createIFrameHandler: (overwriteAttrs?: Record<string, Literal>) => IFrameHandler;
export {};
