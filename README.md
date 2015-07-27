IPython Notebook Extensions
===========================

Table of Contents
-----------------

Why use this? 

- Generates table of contents in your IPython Notebook based on 
  H1 and H2 headers.

- Requires zero installation or configuration on your machine.

How can I use this?

- Add these lines to a markdown cell near the top of your IPython
  Notebook where you want the TOC to appear.

        <h1 id="tocheading">Table of Contents</h1>
        <div id="toc"></div>
        <script>
        $.getScript('http://asimjalis.github.io/ipyn-ext/js/ipyn-toc.js')
        </script>

Heading Scroll Manager
----------------------

Why use this?

- Imagine you are presenting a class with your IPython Notebook. You
  want to talk about one topic, the scroll to the next heading.

- Use <SPACE> to move to next heading (H1 or H2).

- Use Shift-<SPACE> to move to the previous heading.

How can I use this?

- Insert the following lines to a markdown cell near the top of your
  IPython Notebook.

        <script>
        $.getScript('http://asimjalis.github.io/ipyn-ext/js/ipyn-heading-scroll-manager.js')
        </script>
