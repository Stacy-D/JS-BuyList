$(function () {
    var row_template = $(".row-template").html()
    var product_list = $(".product-list")
    var input_product = $(".add-product")
    function add_row(name) {
        console.log(name + " added");
        var $node = $(row_template);
        $node.find(".bl-product").text(name);
        var quantity = 1;
        var $plus = $node.find(".bl-plus");
        var $minus = $node.find(".bl-minus");
        var $label = $node.find(".bl-label");
        var $cross = $node.find(".bl-cross");
        var $buy = $node.find(".bl-buy");
        var $unbuy = $node.find(".bl-unbuy");
        
        $plus.click(function () {
            quantity++;
            $label.text(quantity);
        });
        $minus.click(function () {
            if(quantity > 1){
                quantity--;
                $label.text(quantity);
            }
        });
        $cross.click(function(){
            $node.remove();
        });
        $label.text(quantity);
        $node.addClass("state-not-bought");
        $buy.click(function(){
            $node.removeClass("state-not-bought");
            $node.addClass("state-bought");
        });
        $unbuy.click(function(){
            $node.removeClass("state-bought");
            $node.addClass("state-not-bought");
        });
        product_list.append($node);
    }
    $(".add-product-but").click(function () {
        var text = input_product.val();
        if (text) {
            add_row(text);
            input_product.val("");
        }
    });
    add_row("Tomatoes")
    add_row("Cucumbers")
    add_row("Potato")
});