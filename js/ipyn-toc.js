/*
ipyn-toc - generates table of contents

See README.md for how to use it.

Based on https://kmahelona.github.io/ipython_notebook_goodies/ipython_notebook_toc.js
*/

// Builds a <ul> Table of Contents from all <headers> in DOM
function createTOC(){
    var toc = "";
    var level = 0;
    var levels = {}
    $('#toc').html('');
    var firstHeadingId = '';
    var leafNodeCount = 0;

    $(":header").each(function(i){
        // Remember first header.
        if (i == 0) { firstHeadingId = this.id }

        // TOC should not have an entry for itself.
        if (this.id == 'Table-of-Contents' || $(this).attr('class') == 'tocheading' ) { return }

        // Make each heading link back to TOC but hide its linkiness.
        var targetRef = '#' + firstHeadingId
        $(this).wrap(
            '<a href="' + targetRef + '"' + 
            ' style="text-decoration:none;color:rgb(0,0,0)">')
        
        titleText = this.innerHTML;

        // From h1 get 1, from h2 get 2, etc.
        openLevel = this.tagName[1];

        // If the last entry was the same hN then increment.
        if (levels[openLevel]) {
            levels[openLevel] += 1;
        } 
        
        // Otherwise it is a new hN, so set it to 1.
        else {
            levels[openLevel] = 1;
        }

        // We pushed down one level deeper.
        if (openLevel > level) {
            toc += (new Array(openLevel - level + 1)).join('<ul class="toc">');
        } 
        
        // We pulled up a level.
        else if (openLevel < level) {
            // So last entry was a leaf-node.
            leafNodeCount += 1

            // Close out this level.
            toc += (new Array(level - openLevel + 1)).join("</ul>");
            for (i=level;i>openLevel;i--) { levels[i]=0; }
        }

        // We are at the same level as the last entry.
        else {
            // So last entry was a leaf-node.
            leafNodeCount += 1
        }

        level = parseInt(openLevel);

        if (this.id==''){this.id = this.innerHTML.replace(/ /g,"-")}
        var anchor = this.id;
        toc += '<li><a href="#' + anchor + '">' 
            +  levels[openLevel].toString() 
            + '. ' + titleText + '</a></li>';
    });

    if (level) { toc += (new Array(level + 1)).join("</ul>"); }

    // Prepend leaf-node count.
    toc = "<p>Sections: " + leafNodeCount + "</p>" + toc
 
    // Stick this into the document.
    $('#toc').append(toc);

};

// Executes the createToc function
setTimeout(function(){createTOC();},100);

// Rebuild to TOC every minute
setInterval(function(){createTOC();},60000);
