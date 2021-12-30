---
layout: simple
series: Maths editing done right
title: "Part 1: Motivation"
date: "December 30, 2021"
---

So earlier this summer, I was a part of a project with my college clubmates, which revolved building a site for mock exams (see [thithu.chungtacungtien.com](thithu.chungtacungtien.com)). Later, the others stepped down, so I continued this project alone, and built a site for hosting academic documents (see [chungtacungtien.com](chungtacungtien.com)). It was a great experience, though I was completely burnt out at the end.

Our solution for editing mock exams data was to create a custom editing interface, with textboxes in a predefined layout, which looks like forms that you would normally see on the web.

![old editor](/maths-editing-done-right/old-edit.png)

This works reliably, but there's one thing held me back: editing is really slow. Given that the mock exam was put together on Overleaf by our content team, we had a tough time inputting all of those LaTeX source codes on that editor.

So later, when I was working on the second half of the project, I switched to using Notion as an editor, thanks to its amazing WYSIWYG look and feel. All of that was processed through [its API](https://developers.notion.com/), which isn't out of beta yet, and displayed as custom components on our website. This worked almost perfectly, but there was still two main pain points:

- **Editing math is slow**: Gotta use `Ctrl + Shift + E` to speed up writing, but still slow.
- **Hard to make custom blocks**: Notion has no builtin way to represent multichoice questions, so I have to make up a pattern for the content team to follow (something likes "a paragraph "Chọn đáp án" followed by a bulleted list with uppercase alpha is a multichoice list"). But sometimes, typos show up and break the pattern so my processing pipeline broke.

Today, due to the fact that there's no one to look after this project after I'm gone, our content team and I came to agreement that we will use pdfs instead of using custom components and stuffs. This is as simple as a CRUD system, so there's not much things to do here.

---

But still, I want to address that editor problem. There's two main reasons:

- I've been editing maths formulas since I knew how to use the internet, but I found no satisfying solution for this, seriously. (Notion is the best one I found till now, but it isn't built solely for maths so... meh.)
- I never worked on a rich text editor, so I'm curious what it would be to make one.

And yes, I will try building an editor :)

This is what I have in mind for a math oriented editor:

![concept](/maths-editing-done-right/concept.png)

The editor should have the same editing potential as a text editor, but more rooms for WYSIWYG things. When we focus on a line, that line turns into "raw mode" and you can edit the formula directly like in LaTeX code. But when we navigate to other lines, that line should turn into a preview...

This is getting a bit too long, so I will stop here. Goodbye and good night :)

---