// Turns a project title into a URL-safe slug for linking directly to it,
// e.g. "Jamco Dashboard" -> "jamco-dashboard".
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}