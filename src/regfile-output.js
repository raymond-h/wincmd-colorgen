export function toIniLike(obj) {
    let str = '';
    for(const i in obj) {
        str += '[' + i + ']\n';

        for(const j in obj[i]) {
            str += `"${j}"=${obj[i][j]}` + '\n';
        }
    }
    return str;
}

export function stringify(obj) {
    return `Windows Registry Editor Version 5.00

${ toIniLike(obj) }`;
}
