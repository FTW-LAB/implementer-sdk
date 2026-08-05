/** @securist/implementer-sdk */
export const packageId = 'implementer-sdk' as const
export const org = 'securist' as const
export function banner(): string {
  return `[Securist] ${org}/${packageId} · UNCLASSIFIED // PUBLIC SOURCE`
}
