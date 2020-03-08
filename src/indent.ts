
function indent(str: string): string;
function indent(strs: TemplateStringsArray, ...interps: string[]): string;
function indent(strs: string | TemplateStringsArray, ...interps: string[]): string{
  const str = typeof strs === "string" ? strs : strs.map((s, i) => s + (interps[i] || "")).join("");
  return str.replace(/^(?=.)/gm, "  ");
}

export default indent;
