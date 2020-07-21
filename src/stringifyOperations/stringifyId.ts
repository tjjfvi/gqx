
import { Id } from ".";

export const stringifyId = (id: Id) =>
  `"${id.type}$${id.prop}"`
