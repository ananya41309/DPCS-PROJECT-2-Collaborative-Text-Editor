import { KebabCase, StringKey } from '@remirror/core-types';
/**
 * Get the styles for a given property of an element.
 */
export declare function getStyle(element: HTMLElement, property: KebabCase<StringKey<CSSStyleDeclaration>>): string;
/**
 * Set more styles to the given element.
 */
export declare function setStyle(target: HTMLElement, styles: Partial<CSSStyleDeclaration>): Partial<CSSStyleDeclaration>;
export declare const DOM_SIZE_UNITS: readonly ["px", "rem", "em", "in", "q", "mm", "cm", "pt", "pc", "vh", "vw", "vmin", "vmax"];
export type DomSizeUnit = (typeof DOM_SIZE_UNITS)[number];
/**
 * A tuple for the font size and unit.
 */
export type ParsedDomSize = [size: number, unit: DomSizeUnit];
/**
 * Parse the font size and font unit from the provided value. When the value
 * type is unsupported it default to `px`.
 */
export declare function parseSizeUnit(fontSize?: string | undefined | null): ParsedDomSize;
export declare function getFontSize(element?: Element | null): string;
/**
 * Extract the pixel value from a dimension string or CSS function.
 *
 * Supports the CSS functions `min`, `max` and `clamp` even when nested.
 *
 * Does not support percentage units or the `calc` function.
 *
 * Adapted from https://github.com/PacoteJS/pacote/blob/20cb1e3a999ed47a8d52b03b750290cf36b8e270/packages/pixels/src/index.ts
 */
export declare function extractPixelSize(size: string, element?: Element | null): number;
/**
 * Convert the received font size to a valid unit
 */
export declare function convertPixelsToDomUnit(size: string, to: DomSizeUnit, element?: Element | null): number;
/**
 * Checks whether the passed value is a valid dom node
 *
 * @param domNode - the dom node
 */
export declare function isDomNode(domNode: unknown): domNode is Node;
/**
 * Checks for an element node like `<p>` or `<div>`.
 *
 * @param domNode - the dom node
 */
export declare function isElementDomNode(domNode: unknown): domNode is HTMLElement;
/**
 * Checks for a text node.
 *
 * @param domNode - the dom node
 */
export declare function isTextDomNode(domNode: unknown): domNode is Text;
/**
 * Merge two DOMRect objects into a one big DOMRect object that contains both two DOMRect objects.
 *
 * @param rect1 - the first DOMRect
 * @param rect2 - the second DOMRect
 */
export declare function mergeDOMRects(rect1: DOMRect, rect2: DOMRect): DOMRect;
