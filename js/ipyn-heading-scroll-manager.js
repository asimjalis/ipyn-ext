/*
ipyn-heading-scroll-manager - enables scrolling to next/previous h1/h2 heading.

See README.md for how to use it.

Based on: 
- How to write custom ScrollManager: https://stash.csiro.au/users/kru03a/repos/ipydev/browse/IPython/html/static/notebook/js/scrollmanager.js
- How to integrate custom ScrollManager into IPython: https://github.com/ipython/ipython/issues/8443
*/

require(['notebook/js/scrollmanager'], function(sm) {
    var MyScrollManager = function(notebook, options) {
        sm.ScrollManager.apply(this, [notebook, options]);
        options = options || {};
        this._level = options.heading_level || 2;
    };

    // By default revert to parent's behavior.
    MyScrollManager.prototype = Object.create(sm.ScrollManager.prototype);

    MyScrollManager.prototype.scroll_to = function(selector) {
        // Small offset for breathing room above header.
        var scrollTop = $(selector).offset().top + this.element.scrollTop() - 
            this.element.offset().top - 15
        this.element.animate({'scrollTop': scrollTop}, this.animation_speed);
    }

    MyScrollManager.prototype.scroll = function (delta) {
        var headers = $();
        var i;
        for (i = 1; i <= this._level; i++) {
            headers = headers.add('#notebook-container h' + i);
        }

        // Find the header the user is on or below.
        var first_cell_top = this.notebook.get_cell(0).element.offset().top;
        var current_scroll = this.element.scrollTop();
        var header_scroll = 0;
        i = -1;
        while (current_scroll >= header_scroll && i < headers.length) {
            if (++i < headers.length) {
                header_scroll = $(headers[i]).offset().top - first_cell_top;
            }
        }
        i--;

        // Move forward or backwards.
        i += delta;

        // Scroll!
        if (0 <= i && i < headers.length) {
            this.scroll_to(headers[i]);
            return false;
        } else {
            // Default to base's scroll behavior when target header doesn't exist.
            return sm.ScrollManager.prototype.scroll.apply(this, [delta]);
        }
    };

    IPython.notebook.scroll_manager = new MyScrollManager(IPython.notebook,
            {'heading_level':2,'animation_speed':1000});
});

