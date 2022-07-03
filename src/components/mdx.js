import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export default async function getMarkdown() {
  const mdPath = path.join(root, "pages", "index.md");
  const source = fs.readFileSync(mdPath, "utf8");

  const matterResult = await matter(source);

  return {
    markdown: matterResult.content,
  };
}
