// Ambient declaration so `tsc` can typecheck `index.ts`, which re-exports the
// `.astro` component. Editors get richer types from the Astro language server;
// this exists only so the `build` script (a typecheck) can run.
declare module '*.astro' {
	const Component: (props: Record<string, unknown>) => unknown
	export default Component
}
