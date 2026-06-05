import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import { Feed } from 'feed'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
const parser = new MarkdownIt()

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
  const siteUrl = 'https://evvil.town'

  const feed = new Feed({
    title: 'evvil.town',
    description: 'the ramblings of an outdoor shut-in.',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    updated: posts[0].data.date,
    favicon: `${siteUrl}/favicon.ico`,
    author: {
      name: 'sara wren',
      link: siteUrl
    }
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.data.title,
      id: `/journal/posts/${post.id}`,
      link: `/journal/posts/${post.id}`,
      date: post.data.date,
      content: sanitizeHtml(parser.render(post.body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      })
    })
  })

  return new Response(feed.atom1(), {
    headers: { 'Content-Type': 'application/xml' }
  })
}
