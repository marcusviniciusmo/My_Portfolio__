export function setBackgroundGradient(
  direction: string,
  fromColor: string,
  toColor: string,
) {
  return `background: linear-gradient(
    ${direction},
    ${fromColor},
    ${toColor}
  );`;
}
