export function joinClassNames(classNames: (string | boolean | undefined | null)[]): string {
  return classNames
    .filter(className => typeof className === 'string' && className.trim() !== '')
    .join(' ')
    .trim();
}