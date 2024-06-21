declare module "htl" {
  /** Renders the specified markup as an element, text node, or null as appropriate. */
  type TaggedTemplateParams = [
    template: { raw: readonly string[] | ArrayLike<string> },
    ...substitutions: any[],
  ];
  /** Renders the specified markup as an HTML element, text node, or null as appropriate. */
  const html: {
    <T extends HTMLElement | Text | null>(...args: TaggedTemplateParams): T;
    /** Renders the specified markup as a document fragment. */
    fragment(...args: TaggedTemplateParams): DocumentFragment;
  };
  /** Renders the specified markup as an SVG element, text node, or null as appropriate. */
  const svg: {
    <T extends SVGElement | Text | null>(...args: TaggedTemplateParams): T;
    /** Renders the specified markup as a document fragment. */
    fragment(...args: TaggedTemplateParams): DocumentFragment;
  };
  export { html, svg };
}
