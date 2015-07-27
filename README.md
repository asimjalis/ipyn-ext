IPython Notebook Extensions
===========================

Present
-------

Why should I use this? 

- Makes your IPython Notebook easier to use for presenting and teaching.

- Includes all the goodies in this project.

    - Generates table of contents.

    - Enables scrolling to headers.

- Requires zero installation or configuration on your machine.

How can I use this?

- Add these lines to a markdown cell near the top of your IPython
  Notebook where you want the TOC to appear.

      <h1 id="tocheading">Table of Contents</h1>
      <div id="toc"></div>

- Then at the bottom of your notebook add these lines in a code cell
  and hit the play button.

      %%javascript
      $.getScript('http://asimjalis.github.io/ipyn-ext/js/ipyn-present.js')

Table of Contents
-----------------

Why should I use this? 

- Generates table of contents in your IPython Notebook based on 
  H1 and H2 headers.

- Requires zero installation or configuration on your machine.

How can I use this?

- Add these lines to a markdown cell near the top of your IPython
  Notebook where you want the TOC to appear.

      <h1 id="tocheading">Table of Contents</h1>
      <div id="toc"></div>

- Then at the bottom of your notebook add these lines in a code cell
  and hit the play button.

      %%javascript
      $.getScript('http://asimjalis.github.io/ipyn-ext/js/ipyn-toc.js')

Heading Scroll Manager
----------------------

Why should I use this?

- Imagine you are presenting a class with your IPython Notebook. You
  want to talk about one topic, the scroll to the next heading.

- Use <SPACE> to move to next heading (H1 or H2).

- Use Shift-<SPACE> to move to the previous heading.

How can I use this?

- Add the following lines in a code cell at the bottom of your
  notebook and hit the play button.

      %%javascript
      $.getScript('http://asimjalis.github.io/ipyn-ext/js/ipyn-heading-scroll-manager.js')

- Use <SPACE> and Shift-<SPACE> to test the scrolling.
