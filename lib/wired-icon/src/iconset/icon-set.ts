// TODO: create a wired-iconset library with iconset loading capability
import { ICON_SET } from './icon-set-full';

/**
 * key is the name of the icon
 * value is the path for the svg (d attribute on path svg element)
 */
export type SvgIconSet = {
    [key: string]: string
};

/**
 * Retrieves the svg path from the icon name.
 * @param iconName : the icon name as known in material icon.
 */
export const getSvgPath = (iconName: string): string => {
    return ICON_SET[iconName];
}
