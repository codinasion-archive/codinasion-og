import Link from "next/link";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import MdxComponent from "./_components/MdxComponent";

import { getMarkdown } from "./_components/mdx";

export default function Home({ markdown }) {
  return (
    <>
      <div className="home">
        <ReactMarkdown components={MdxComponent} rehypePlugins={[rehypeRaw]}>
          {markdown}
        </ReactMarkdown>
      </div>

      <br />

      <div align="center">
        <h4>
          <b>
            Made with ❤️ by{" "}
            <Link href="https://github.com/codinasion">
              <a target="_blank" rel="noopener noreferrer">
                Codinsaion
              </a>
            </Link>
          </b>
        </h4>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { markdown } = await getMarkdown();

  return {
    props: {
      markdown,
    },
    revalidate: 60,
  };
}
