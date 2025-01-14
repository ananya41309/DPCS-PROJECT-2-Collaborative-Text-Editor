/**
 * Set the status of the created live region so that screen readers
 * announce the changes for a11y.
 *
 * @remarks
 *
 * The status is using a singleton html div. This means that the same invisible
 * live status element is used for the lifetime of your code.
 *
 * @param status the status message
 * @param doc document passed by the user.
 */
export declare const setStatus: (status: string, doc?: Document) => void;
