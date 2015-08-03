import _ from 'lodash';
import oneColor from 'onecolor';

export function parseColor(color) {
    return oneColor(color);
}

export function colorToHexString(c) {
    const parts =
        [c.red(), c.green(), c.blue(), 0]
        .map((p) => Math.floor(p * 255).toString(16))
        .map((p) => _.padLeft(p, 2, '0'));

    return `dword:${parts.reverse().join('')}`;
}

export default function parse(obj) {
    const out = {};

    let i = 0;
    for(const c of obj.colors) {
        out[`ColorTable${_.padLeft(i+'', 2, '0')}`] =
            colorToHexString(parseColor(c));

        i++;
    }

    let { text, background } = obj.screen;
    out.ScreenColors = `dword:000000${background.toString(16)}${text.toString(16)}`;

    text = obj.popup.text;
    background = obj.popup.background;
    out.PopupColors = `dword:000000${background.toString(16)}${text.toString(16)}`;

    return { 'HKEY_CURRENT_USER\\Console': out };
}
