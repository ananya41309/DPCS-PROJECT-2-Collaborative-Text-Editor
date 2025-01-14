import { Replace } from '@remirror/core';
import type { MentionExtensionAttributes } from '@remirror/extension-mention';
import { ChangeReason, ExitReason, SuggestChangeHandlerProps } from '@remirror/pm/suggest';
import { MenuNavigationOptions, UseMenuNavigationReturn } from './use-menu-navigation';
export interface MentionState<Data extends MentionExtensionAttributes = MentionExtensionAttributes> extends Pick<SuggestChangeHandlerProps, 'name' | 'query' | 'text' | 'range'> {
    /**
     * This command when the mention is active.
     */
    command: (item: Data) => void;
    /**
     * The reason for the change.
     */
    reason: ChangeReason;
}
export interface UseMentionReturn<Data extends MentionExtensionAttributes = MentionExtensionAttributes> extends UseMenuNavigationReturn<Data> {
    state: MentionState<Data> | null;
}
/**
 * A hook that provides the state for social mentions that responds to
 * keybindings and key-presses from the user.
 *
 * This is used by the `SocialMentionDropdown` component and can be used by you
 * for a customized component.
 *
 * The only prop required is the list of data in order to support keybinding and
 * properly selecting the index for you. The data must have a `label` and `id`
 * key. The label is the text that should be shown inside the mention and the
 * `id` is whatever unique identifier that can be used.
 *
 * You can also add other supported attributes which will be added to the
 * mention node, like `href` and whatever you decide.
 *
 * @param list - the list of data from which an index can be calculated. Must
 * include at least an `id` and a `label`.
 */
export declare function useMention<Data extends MentionExtensionAttributes = MentionExtensionAttributes>(props: UseMentionProps<Data>): UseMentionReturn<Data>;
export interface UseMentionProps<Data extends MentionExtensionAttributes = MentionExtensionAttributes> extends MenuNavigationOptions {
    /**
     * The list of data from which an index can be calculated. Must include at
     * least an `id` and a `label`.
     */
    items: Data[];
    /**
     * This method is called when a user induced exit happens before a mention has
     * been created. It receives the state, and gives the consumer of this hook
     * the opportunity to manually create their own mention
     *
     * Leave this undefined to ignore exits.
     *
     * To enable automatic exit handling. The following will automatically set the
     * id to be the query and the label to be the full matching text. Extra attrs
     * like `href` can be added by you to the attrs object parameter.
     *
     * ```ts
     * const mentionState = useMention({ items, onExit(_, command) => command(), });
     * ```
     */
    onExit?: UseMentionExitHandler<Data>;
    /**
     * Whether matches should be permanently ignored when the user presses escape.
     *
     * @defaultValue true
     */
    ignoreMatchesOnDismiss?: boolean;
}
export type UseMentionExitHandler<Data extends MentionExtensionAttributes = MentionExtensionAttributes> = (props: OnExitProps<Data>, command: (attrs?: Partial<Data>) => void) => void;
type OnExitProps<Data extends MentionExtensionAttributes = MentionExtensionAttributes> = Replace<Omit<MentionState<Data>, 'command'>, {
    reason: ExitReason;
}>;
export {};
