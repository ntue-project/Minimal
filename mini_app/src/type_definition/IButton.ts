import {ILayout} from "./ILayout";

export interface IButton extends ILayout {

    onPress? (): void
    onLongPress? (): void
}