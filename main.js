$(function () {
    var row_template = $(".row-template").html();
    var product_list = $(".product-list")
    var input_product = $(".add-product")
    var not_bought_items = $(".not-bought-items")
    var bought_items = $(".bought-items")
    var item_template = $(".item-template").html();

    function add_row(name) {
        console.log(name + " added");
        var $node = $(row_template);
        var $item = $(item_template);
        var quantity = 1;
        var $product = $node.find(".bl-product");
        var $plus = $node.find(".bl-plus");
        var $minus = $node.find(".bl-minus");
        var $label = $node.find(".bl-label");
        var $cross = $node.find(".bl-cross");
        var $buy = $node.find(".bl-buy");
        var $unbuy = $node.find(".bl-unbuy");
        var $editField = $node.find(".title-edit");
        $item.find(".item-stat-title").text(name);
        $item.find(".item-stat-qua").text(quantity);
        not_bought_items.append($item);
        $product.text(name);
        $product.click(function () {
            if ($node.hasClass("state-not-bought")) {
                $editField.val($product.text());
                $node.removeClass("state-not-edit");
                $node.addClass("state-edit");
                $editField.focus();
            }
        });
        $editField.focusout(function () {
            if ($node.hasClass("state-not-bought")) {
                $node.removeClass("state-edit");
                $node.addClass("state-not-edit");
                var new_name = $editField.val();
                $product.text(new_name);
                $item.find(".item-stat-title").text(new_name);
            }
        });
        $plus.click(function () {
            quantity++;
            $label.text(quantity);
            $item.find(".item-stat-qua").text(quantity);
            $minus.attr("disabled", false);
        });
        $minus.click(function () {
            if (quantity > 1) {
                quantity--;
                $label.text(quantity);
                $item.find(".item-stat-qua").text(quantity);
                if (quantity == 1) {
                    $minus.attr("disabled", true);
                }
            }
        });
        $cross.click(function () {
            $node.remove();
            $item.remove();
        });
        $label.text(quantity);
        $node.addClass("state-not-bought");
        $node.addClass("state-not-edit");
        $buy.click(function () {
            $node.removeClass("state-not-bought");
            $node.addClass("state-bought");
            $item.addClass("sold");
            bought_items.append($item);
        });
        $unbuy.click(function () {
            $node.removeClass("state-bought");
            $node.addClass("state-not-bought");
            $item.removeClass("sold");
            not_bought_items.append($item);
        });
        product_list.append($node);
    }

    function addNewProduct() {
        var text = input_product.val();
        if (text) {
            add_row(text);
            input_product.val("");
        }
        input_product.focus();
    }
    $(".add-product-but").click(addNewProduct);
    input_product.keyup(function (e) {
        if (e.keyCode == 13) {
            addNewProduct();
        }
    });
    add_row("Томати")
    add_row("Огірки")
    add_row("Банани")
});