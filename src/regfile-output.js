import ini from 'ini';

export function stringify(obj) {
    return `Windows Registry Editor Version 5.00

${ ini.stringify(obj) }`;
}
