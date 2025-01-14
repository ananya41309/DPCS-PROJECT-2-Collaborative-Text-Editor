import React, { FC } from 'react';
import { Literal } from '@remirror/core';
type LinkHandler = FC<{
    href: string;
    target?: string | null;
    children: React.ReactElement<HTMLElement>;
}>;
export declare const createLinkHandler: (overwriteAttrs?: Record<string, Literal>) => LinkHandler;
export {};
