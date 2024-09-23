import type { JSX } from 'pota/jsx-runtime'

declare module 'pota/jsx-runtime' {
	namespace JSX {
		/** Adds an attribute to all HTML elements */
		interface IntrinsicHTMLAttributes {
			clickOutside?: (event: Event, node: HTMLElement) => void
		}

		/** Adds an attribute to all SVG elements */
		interface IntrinsicSVGAttributes {
			clickOutside?: (event: Event, node: HTMLElement) => void
		}

		/** Adds an attribute to all MathML elements */
		interface IntrinsicMathMLAttributes {
			clickOutside?: (event: Event, node: HTMLElement) => void
		}
	}
}
