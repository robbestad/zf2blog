
<!-- Finally, to actually run the highlighter, you need to include this JS on your page -->
$(document).ready(function() {
SyntaxHighlighter.all();
$(".toolbar").css("visibility","hidden");

 $(".loader").funloader()

})

<!-- IMPORTANT FOR STYLISH CSS  -->

StyleFix.register(function(css, raw) {
    if (PrefixFree.functions.indexOf('radial-gradient') > -1) {
        css = css.replace(/radial-gradient\(([a-z-\s]+\s+)?at ([^,]+)(?=,)/g, function($0, shape, center){
            return 'radial-gradient(' + center + (shape? ', ' + shape : '');
        });
    }
    
    return css;
});
