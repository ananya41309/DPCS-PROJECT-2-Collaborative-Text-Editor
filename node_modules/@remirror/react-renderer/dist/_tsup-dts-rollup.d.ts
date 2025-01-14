import { ComponentType } from 'react';
import { FC } from 'react';
import { Literal } from '@remirror/core';
import { default as React_2 } from 'react';
import { RemirrorJSON } from '@remirror/core';

export declare interface BaseRenderTreeProps {
    skipUnknownTypes: boolean;
    skipUnknownMarks: boolean;
    markMap: MarkMap;
    typeMap: MarkMap;
    children?: never;
}

declare const Callout: FC<{
    node: RemirrorJSON;
    markMap: MarkMap;
    children?: never;
}>;
export { Callout }
export { Callout as Callout_alias_1 }
export { Callout as Callout_alias_2 }

declare const CodeBlock: FC<{
    node: RemirrorJSON;
    markMap: MarkMap;
}>;
export { CodeBlock }
export { CodeBlock as CodeBlock_alias_1 }
export { CodeBlock as CodeBlock_alias_2 }

declare const createIFrameHandler: (overwriteAttrs?: Record<string, Literal>) => IFrameHandler;
export { createIFrameHandler }
export { createIFrameHandler as createIFrameHandler_alias_1 }
export { createIFrameHandler as createIFrameHandler_alias_2 }

declare const createLinkHandler: (overwriteAttrs?: Record<string, Literal>) => LinkHandler;
export { createLinkHandler }
export { createLinkHandler as createLinkHandler_alias_1 }
export { createLinkHandler as createLinkHandler_alias_2 }

declare const Doc: FC<SubRenderTreeProps>;
export { Doc }
export { Doc as Doc_alias_1 }

declare const Heading: FC<{
    node: RemirrorJSON;
    markMap: MarkMap;
}>;
export { Heading }
export { Heading as Heading_alias_1 }
export { Heading as Heading_alias_2 }

declare type IFrameHandler = FC<{
    node: RemirrorJSON;
    markMap: MarkMap;
}>;

declare type LinkHandler = FC<{
    href: string;
    target?: string | null;
    children: React_2.ReactElement<HTMLElement>;
}>;

declare type MarkMap = Partial<Record<string, string | ComponentType<any>>>;
export { MarkMap }
export { MarkMap as MarkMap_alias_1 }

/**
 * A recursively rendered tree.
 */
declare const RemirrorRenderer: FC<RenderTreeProps>;
export { RemirrorRenderer }
export { RemirrorRenderer as RemirrorRenderer_alias_1 }

export declare interface RenderTreeProps extends Partial<BaseRenderTreeProps> {
    json: RemirrorJSON;
}

export declare interface SubRenderTreeProps extends BaseRenderTreeProps {
    node: RemirrorJSON;
}

declare const TextHandler: FC<TextHandlerProps>;
export { TextHandler }
export { TextHandler as TextHandler_alias_1 }
export { TextHandler as TextHandler_alias_2 }

declare interface TextHandlerProps {
    node: RemirrorJSON;
    markMap: MarkMap;
    skipUnknownMarks?: boolean;
}

export { }
