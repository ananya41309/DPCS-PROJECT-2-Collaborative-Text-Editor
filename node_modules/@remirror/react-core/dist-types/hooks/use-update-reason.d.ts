/**
 * Provide the reason for the latest state update with boolean flags.
 */
export declare function useUpdateReason(): UpdateReason;
export interface UpdateReason {
    /**
     * The selection changed.
     */
    selection: boolean;
    /**
     * The document changed.
     */
    doc: boolean;
    /**
     * A stored mark was added to the current selection
     */
    storedMark: boolean;
}
