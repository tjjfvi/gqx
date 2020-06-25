
import { Id } from ".";

export default (id: Id) => `"${id.type}$${id.prop}"`
