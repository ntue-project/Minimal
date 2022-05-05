import {ILayout} from "./ILayout";

export interface IPress extends ILayout {

    onPress? (): void
    onLongPress? (): void
}