---
title: journal
layout: post
---

<style>
ul { list-style-type: '# '; }
ul a:hover { text-decoration: underline; }
</style>

if you wanna read my ramblings, i post once in a blue moon.
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

<div style="padding: 2rem 0">
---</br>
TODO:<br>
- [ ] make the tags do something<br>
---
</div>
