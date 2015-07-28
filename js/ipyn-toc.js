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

    $(":header").each(function(i){
        if (i == 0) { firstHeadingId = this.id }
	    if (this.id == 'Table-of-Contents') { return }

        // Make each heading link back to TOC but hide its linkiness.
        var targetRef = '#' + firstHeadingId
        $(this).wrap(
            '<a href="' + targetRef + '"' + 
            ' style="text-decoration:none;color:rgb(0,0,0)">')
        
	    titleText = this.innerHTML;
	    openLevel = this.tagName[1];

	    if (levels[openLevel]){
		levels[openLevel] += 1;
	    } else{
		levels[openLevel] = 1;
	    }

	    if (openLevel > level) {
		toc += (new Array(openLevel - level + 1)).join('<ul class="toc">');
	    } else if (openLevel < level) {
		toc += (new Array(level - openLevel + 1)).join("</ul>");
		for (i=level;i>openLevel;i--){levels[i]=0;}
	    }

	    level = parseInt(openLevel);


	    if (this.id==''){this.id = this.innerHTML.replace(/ /g,"-")}
	    var anchor = this.id;
        
	    toc += '<li><a href="#' + anchor + '">' +  levels[openLevel].toString() + '. ' + titleText
		+ '</a></li>';
        
	});

    
    if (level) {
	toc += (new Array(level + 1)).join("</ul>");
    }

 
    $('#toc').append(toc);

};

// Executes the createToc function
setTimeout(function(){createTOC();},100);

// Rebuild to TOC every minute
setInterval(function(){createTOC();},60000);
