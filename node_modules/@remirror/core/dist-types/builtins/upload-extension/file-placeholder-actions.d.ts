export declare enum ActionType {
    ADD_PLACEHOLDER = 0,
    REMOVE_PLACEHOLDER = 1
}
interface AddPlaceholderAction {
    type: ActionType.ADD_PLACEHOLDER;
    id: string;
    payload: any;
    pos: number;
}
interface RemovePlaceholderAction {
    type: ActionType.REMOVE_PLACEHOLDER;
    id: string;
}
export type PlaceholderPluginAction = AddPlaceholderAction | RemovePlaceholderAction;
export {};
