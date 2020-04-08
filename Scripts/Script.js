// document ready
// $(document).ready(function () {
//     console.log('ready');
// });

// name symbol toggle
$(".suiButton").on("click", function() {
    $(".WhatsItMean").fadeToggle();
});

// Tooltip only Text
// Tooltip only Text
$('.suiButton2').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});

// smooth scroll
$('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
        {
        scrollTop: $($(this).attr("href")).offset().top
        },
        500,
        "linear"
    );
});

// fade in on scroll
$(document).ready(function() {
    $(window).scroll(function() {
        $(".fadeIn").each(function(i) {
        let bottom_of_element = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
            $(this).animate({ opacity: "1" }, 500);
        }
        });
    });
});




// my typed.js customization

$(function() {
    $(".headerH2").typed({
        strings: [
            "... ^1250",
        "I'm a Front-End Web Developer! ^800",
        "I'm Currently Looking For Work! ^800",
        "Thanks for Stopping By! ^800",
        "Front-End Web Developer"
        ],
        typeSpeed: 0,
        showCursor: false,
        backSpeed: 20,
        smartBackspace: true
    });
    });

    // I'm including the Type.js Library here.

    // Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com
    // https://github.com/mattboldt/typed.js
    !(function(t) {
    "use strict";
    var s = function(s, e) {
        (this.el = t(s)),
        (this.options = t.extend({}, t.fn.typed.defaults, e)),
        (this.isInput = this.el.is("input")),
        (this.attr = this.options.attr),
        (this.showCursor = this.isInput ? !1 : this.options.showCursor),
        (this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()),
        (this.contentType = this.options.contentType),
        (this.typeSpeed = this.options.typeSpeed),
        (this.startDelay = this.options.startDelay),
        (this.backSpeed = this.options.backSpeed),
        (this.backDelay = this.options.backDelay),
        (this.stringsElement = this.options.stringsElement),
        (this.strings = this.options.strings),
        (this.strPos = 0),
        (this.arrayPos = 0),
        (this.stopNum = 0),
        (this.loop = this.options.loop),
        (this.loopCount = this.options.loopCount),
        (this.curLoop = 0),
        (this.stop = !1),
        (this.cursorChar = this.options.cursorChar),
        (this.shuffle = this.options.shuffle),
        (this.sequence = []),
        this.build();
    };
    (s.prototype = {
        constructor: s,
        init: function() {
        var t = this;
        t.timeout = setTimeout(function() {
            for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
            t.shuffle && (t.sequence = t.shuffleArray(t.sequence)),
            t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
        }, t.startDelay);
        },
        build: function() {
        var s = this;
        if (
            (this.showCursor === !0 &&
            ((this.cursor = t(
                '<span class="typed-cursor">' + this.cursorChar + "</span>"
            )),
            this.el.after(this.cursor)),
            this.stringsElement)
        ) {
            (s.strings = []), this.stringsElement.hide();
            var e = this.stringsElement.find("p");
            t.each(e, function(e, i) {
            s.strings.push(t(i).html());
            });
        }
        this.init();
        },
        typewrite: function(t, s) {
        if (this.stop !== !0) {
            var e = Math.round(70 * Math.random()) + this.typeSpeed,
            i = this;
            i.timeout = setTimeout(function() {
            var e = 0,
                r = t.substr(s);
            if ("^" === r.charAt(0)) {
                var o = 1;
                /^\^\d+/.test(r) &&
                ((r = /\d+/.exec(r)[0]), (o += r.length), (e = parseInt(r))),
                (t = t.substring(0, s) + t.substring(s + o));
            }
            if ("html" === i.contentType) {
                var n = t.substr(s).charAt(0);
                if ("<" === n || "&" === n) {
                var a = "",
                    h = "";
                for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h; )
                    (a += t.substr(s).charAt(0)), s++;
                s++, (a += h);
                }
            }
            i.timeout = setTimeout(function() {
                if (s === t.length) {
                if (
                    (i.options.onStringTyped(i.arrayPos),
                    i.arrayPos === i.strings.length - 1 &&
                    (i.options.callback(),
                    i.curLoop++,
                    i.loop === !1 || i.curLoop === i.loopCount))
                )
                    return;
                i.timeout = setTimeout(function() {
                    i.backspace(t, s);
                }, i.backDelay);
                } else {
                0 === s && i.options.preStringTyped(i.arrayPos);
                var e = t.substr(0, s + 1);
                i.attr
                    ? i.el.attr(i.attr, e)
                    : i.isInput
                    ? i.el.val(e)
                    : "html" === i.contentType
                    ? i.el.html(e)
                    : i.el.text(e),
                    s++,
                    i.typewrite(t, s);
                }
            }, e);
            }, e);
        }
        },
        backspace: function(t, s) {
        if (this.stop !== !0) {
            var e = Math.round(70 * Math.random()) + this.backSpeed,
            i = this;
            i.timeout = setTimeout(function() {
            if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
                for (var e = ""; "<" !== t.substr(s).charAt(0); )
                (e -= t.substr(s).charAt(0)), s--;
                s--, (e += "<");
            }
            var r = t.substr(0, s);
            i.attr
                ? i.el.attr(i.attr, r)
                : i.isInput
                ? i.el.val(r)
                : "html" === i.contentType
                ? i.el.html(r)
                : i.el.text(r),
                s > i.stopNum
                ? (s--, i.backspace(t, s))
                : s <= i.stopNum &&
                    (i.arrayPos++,
                    i.arrayPos === i.strings.length
                    ? ((i.arrayPos = 0),
                        i.shuffle && (i.sequence = i.shuffleArray(i.sequence)),
                        i.init())
                    : i.typewrite(i.strings[i.sequence[i.arrayPos]], s));
            }, e);
        }
        },
        shuffleArray: function(t) {
        var s,
            e,
            i = t.length;
        if (i)
            for (; --i; )
            (e = Math.floor(Math.random() * (i + 1))),
                (s = t[e]),
                (t[e] = t[i]),
                (t[i] = s);
        return t;
        },
        reset: function() {
        var t = this;
        clearInterval(t.timeout);
        var s = this.el.attr("id");
        this.el.after('<span id="' + s + '"/>'),
            this.el.remove(),
            "undefined" != typeof this.cursor && this.cursor.remove(),
            t.options.resetCallback();
        }
    }),
        (t.fn.typed = function(e) {
        return this.each(function() {
            var i = t(this),
            r = i.data("typed"),
            o = "object" == typeof e && e;
            r || i.data("typed", (r = new s(this, o))),
            "string" == typeof e && r[e]();
        });
        }),
        (t.fn.typed.defaults = {
        strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!"
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
        });
    })(window.jQuery);
// end Typed.js



// Konami Code
var global = {
    konami: function() {
    var konamikeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        started = false,
        count = 0;

    $(document).keydown(function(e) {
        var reset = function() {
            started = false;
            count = 0;
            return;
        };

        key = e.keyCode;

      // Begin watching if first key in sequence was pressed.
        if (!started) {
            if (key == 38) {
            started = true;
            }
        }

      // If we've started, pay attention to key presses, looking for right sequence.
        if (started) {
            if (konamikeys[count] == key) {
            count++;
            } else {
            // Incorrect key, restart.
            reset();
            }
            if (count == 10) {
            // Success!
            alert("Konami code entered! Something cool might be coming! For now, enjoy this!");
            window.location.href = "game.html";
            reset();
            }
        } else {
            reset();
        }
        });
    }
};

global.konami();