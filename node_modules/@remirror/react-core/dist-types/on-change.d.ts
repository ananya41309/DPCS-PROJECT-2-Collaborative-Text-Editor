import type { RemirrorJSON } from '@remirror/core';
export interface OnChangeJSONProps {
    onChange: (json: RemirrorJSON) => void;
}
export declare const OnChangeJSON: ({ onChange }: OnChangeJSONProps) => null;
export interface OnChangeHTMLProps {
    onChange: (html: string) => void;
}
export declare const OnChangeHTML: ({ onChange }: OnChangeHTMLProps) => null;
