export function setCssVariable(variableName: string, value: string) {
    document.documentElement.style.setProperty(`--${variableName}`, value);
}