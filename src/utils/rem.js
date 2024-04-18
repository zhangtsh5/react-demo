export function initRem(designWidth) {
    const minWidth = 1044;
    let width = document.documentElement.getBoundingClientRect().width;
    if (width < minWidth) {
        width = minWidth;
    }
    const rem = width * 10 / designWidth;

    document.documentElement.style.fontSize = rem + 'px';
}
