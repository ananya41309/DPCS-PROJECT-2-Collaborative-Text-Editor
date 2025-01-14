import { MentionAtomNodeAttributes } from '@remirror/extension-mention-atom';
import { ChangeReason, SuggestChangeHandlerProps } from '@remirror/pm/suggest';
import { MenuNavigationOptions, UseMenuNavigationReturn } from './use-menu-navigation';
export interface MentionAtomState<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes> extends Pick<SuggestChangeHandlerProps, 'name' | 'query' | 'text' | 'range'> {
    /**
     * The reason for the change.
     */
    reason: ChangeReason;
    /**
     * A command that will update the current matching region with the provided
     * attributes. To see what can be accomplished please inspect the type of the attrs which should be passed through.
     */
    command: (attrs: Data) => void;
}
export interface UseMentionAtomReturn<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes> extends UseMenuNavigationReturn<Data> {
    state: MentionAtomState<Data> | null;
}
/**
 * A hook that provides the state for social mention atoms that responds to
 * keybindings and key-presses from the user.
 *
 * The difference between this and the `useMention` is that `useMention` creates
 * editable mentions that can be changed over an over again. This creates atom
 * mention which are inserted into the editor as non editable nodes. Backspacing
 * into this node will delete the whole mention.
 *
 * In order to properly support keybindings you will need to provide a list of
 * data that is to be shown to the user. This allows for the user to press the
 * arrow up and arrow down key.
 *
 * You can also add other supported attributes which will be added to the
 * mention node, like `href` and whatever you decide upon.
 *
 * @param props - the props that can be passed through to the mention atom.
 */
export declare function useMentionAtom<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes>(props: UseMentionAtomProps<Data>): UseMentionAtomReturn<Data>;
export interface UseMentionAtomProps<Data extends MentionAtomNodeAttributes = MentionAtomNodeAttributes> extends MenuNavigationOptions, Pick<MentionAtomNodeAttributes, 'replacementType'> {
    /**
     * The list of data from which an index can be calculated. Must include at
     * least an `id` and a `label`.
     */
    items: Data[];
    /**
     * Whether matches should be permanently ignored when the user dismisses the
     * mention suggestion.
     *
     * @defaultValue true
     */
    ignoreMatchesOnDismiss?: boolean;
}
export type { MentionAtomNodeAttributes };
