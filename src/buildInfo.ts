export type Variant = 'dev' | 'sit' | 'prod';

export function formatBuildLabel(
  variant: Variant,
  version: string,
  buildNumber: string,
): string {
  const label = `v${version} (${buildNumber})`;
  return variant === 'prod' ? label : `${label} ${variant.toUpperCase()}`;
}
