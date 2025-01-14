import { ComponentType } from 'react';
import { MentionAtomNodeAttributes, MentionAtomState, UseMentionAtomProps, UseMentionAtomReturn } from '@remirror/react-hooks';
interface MentionAtomPopupComponentProps<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes> extends UseMentionAtomProps<Data> {
    /**
     * Called whenever the query state changes.
     */
    onChange: (mentionAtomState: MentionAtomState<Data> | null) => void;
    /**
     * The component to be used for rendering each item.
     */
    ItemComponent?: ComponentType<MentionAtomPopupItemComponentProps<Data>>;
    /**
     * The message that is displayed when there are no items to display.
     */
    ZeroItemsComponent?: ComponentType<object>;
}
/**
 * This component renders the emoji suggestion dropdown for the user.
 */
export declare function MentionAtomPopupComponent<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes>(props: MentionAtomPopupComponentProps<Data>): JSX.Element;
interface MentionAtomPopupItemComponentProps<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes> {
    item: Data;
    state: UseMentionAtomReturn<Data>['state'];
}
export {};
