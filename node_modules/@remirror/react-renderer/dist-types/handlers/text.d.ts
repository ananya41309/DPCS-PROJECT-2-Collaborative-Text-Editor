import { FC } from 'react';
import { RemirrorJSON } from '@remirror/core';
import { MarkMap } from '../types';
interface TextHandlerProps {
    node: RemirrorJSON;
    markMap: MarkMap;
    skipUnknownMarks?: boolean;
}
export declare const TextHandler: FC<TextHandlerProps>;
export {};
