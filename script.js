$(".article_item_title1").click(
    function() {
    
        $(".article_item_info1").height(220);
        $(".article_item_info2").height(0);
        $(".article_item_info3").height(0);
        $(".arrow1").css("transform","rotate(180deg)")
        $(".arrow2").css("transform","rotate(0)")
        $(".arrow3").css("transform","rotate(0)")
    }
)
$(".article_item_title2").click(
    function() {
        $(".article_item_info1").height(0);
        $(".article_item_info2").height(220);
        $(".article_item_info3").height(0);
        $(".arrow1").css("transform","rotate(0)")
        $(".arrow2").css("transform","rotate(180deg)")
        $(".arrow3").css("transform","rotate(0)")
    }
)
$(".article_item_title3").click(
    function() {
        $(".article_item_info1").height(0);
        $(".article_item_info2").height(0);
        $(".article_item_info3").height(220);
        $(".arrow1").css("transform","rotate(0)")
        $(".arrow2").css("transform","rotate(0)")
        $(".arrow3").css("transform","rotate(180deg)")
    }
)
