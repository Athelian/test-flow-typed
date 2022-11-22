// flow-typed signature: 1d8d8d9891ccf020f0d050618a631a9a
// flow-typed version: a5ce745274/@reach/auto-id_v0.11.x/flow_>=v0.104.x

declare module '@reach/auto-id' {
  /**
   * useId
   *
   * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
   *
   * Note: The returned ID will initially be `null` and will update after a
   * component mounts. Users may need to supply their own ID if they need
   * consistent values for SSR.
   *
   * @see Docs https://reach.tech/auto-id
   */
  declare export function useId(idFromProps?: string | null): string | void;
}
