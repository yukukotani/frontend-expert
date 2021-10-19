import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { Layout } from "../../components/Layout";
import { getAllPosts, getPostBySlug } from "../../utils/posts";
import type { PostData } from "../../utils/posts";
import styles from "./post.module.css";
import "prismjs/themes/prism.css";
import { getMemberByName, Member } from "../../utils/members";
import Link from "next/link";
import { MemberIcon } from "../../components/MemberIcon";
import { Tags } from "../../components/Tags";
import { PostContent } from "../../components/PostContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const Author = ({ author }: { author: Member }) => {
  return (
    <div className={styles.author}>
      <MemberIcon width="60" height="60" name={author.name} />
      <div className={styles.authorInfo}>
        <div className={styles.label}>Author</div>
        <span className={styles.authorName}>
          <Link href={`/members/${author.name}`}>{author.name}</Link>
        </span>
        <ul>
          <li>
            <a
              href={`https://twitter.com/${author.twitterId}`}
              aria-label="twitter"
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href={`https://github.com/${author.githubUsername}`}
              aria-label="github"
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

type Props = {
  post: PostData;
};

const Post = ({ post }: Props) => {
  const author = getMemberByName(post.metaData.author);
  return (
    <Layout
      title={post.metaData.title}
      slug={post.slug}
      description={post.metaData.summary}
    >
      <h1 className={styles.title}>{post.metaData.title}</h1>
      <div className={styles.publishedOn}>
        Published on{" "}
        <time dateTime={post.metaData.createdAt} itemProp="datePublished">
          {post.metaData.createdAt}
        </time>
      </div>
      <Author author={author} />
      <PostContent>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostContent>
      <Tags tags={post.metaData.tags} />
    </Layout>
  );
};

function assertContextForPost(
  context: GetStaticPropsContext
): asserts context is { params: { slug: string } } {
  if (!context.params) {
    throw new Error("'context.params' is undefined");
  }
  if (Array.isArray(context.params.slug)) {
    throw new Error("Unexpected 'slug' is array, expected string.");
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  assertContextForPost(context);
  const post = await getPostBySlug(context.params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Post;
