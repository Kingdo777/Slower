$(document).ready(function () {
    $("footer .nav .shopping-cart img").attr("src", "/static/image/icons/cart_fill.png");
    $("footer .nav .shopping-cart a").css({"color": "#e0620d"});
});


if(typeof SLOWER === "undefined") SLOWER = {};

SLOWER.shopping_cart = (function () {

    return {

    }
})();