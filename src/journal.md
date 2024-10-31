---
title: journal
layout: post
---

<style>
ul { list-style-type: '# '; }
.post-content { font-family: 'Courier New', Courier, monospace; }
article a:hover { text-decoration: underline; }
#rss-feed svg { display: inline-block; vertical-align: top; margin: 0.25rem 0 }
</style>

if you wanna read my ramblings, i post once in a blue moon.<a id="rss-feed" title="rss/atom feed" href="/feed.xml"><svg fill="currentColor" width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 5 5 L 5 9 C 14.93 9 23 17.07 23 27 L 27 27 C 27 14.85 17.15 5 5 5 z M 5 12 L 5 16 C 11.07 16 16 20.93 16 27 L 20 27 C 20 18.72 13.28 12 5 12 z M 8 21 A 3 3 0 0 0 8 27 A 3 3 0 0 0 8 21 z"/></svg>
</a>
<ul>
{%- for post in collections.post reversed -%}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a><br>
    <span style="opacity: 0.5"> 
      @ {{ post.date | utc }}
      {%- for tag in post.data.tags %} #{{ tag }} {%- endfor -%}
    <br>
    ~</span> {{ post.content | excerpt }}
  </li>
{%- endfor -%}
</ul>

<div style="padding: 2rem 0;">
---</br>
TODO:<br>
- [ ] make the tags do something<br>
---
</div>
