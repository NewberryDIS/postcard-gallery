import { s as slugs } from "../../chunks/index.js";
function match(param) {
  return slugs.includes(param);
}
export {
  match
};
