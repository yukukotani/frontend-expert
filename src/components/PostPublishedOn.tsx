import { css } from "@emotion/css"

export const PostPublishedOn = ({createdAt}: {createdAt: string}) => {
  return <div className={style}>
  Published on{" "}
  <time dateTime={createdAt} itemProp="datePublished">
    {createdAt}
  </time>
</div>
}

const style = css`
    margin-top: 0.6rem;
  font-size: 0.8rem;
  font-weight: bold;
`
