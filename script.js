$("li.subnav").on("click", function() {
    $(this).css("border-bottom", "2px solid rgb(0, 119, 255)");
    let val=$(this).attr("data-index");
    if(val=="0")
    {
        $(".subcon").html("Beautifully designed career page with the company logo.<br> Best UX designs. No custom coding required.");
    }
    else if(val=="1")
    {
        $(".subcon").html("Orderly publishing of job listings.<br> Jobs organized by department, location, and employment type.");
    }
    else
    {
        $(".subcon").html("Exclusively color-themed career page corresponding to the company theme. Different layouts available - full-width responsive layout or boxed container format.");
    }
    for(let i=0; i<3; i++)
    {
        if(val!=i)
        {
            $("li[data-index=" + i + "]").css("border-bottom", "2px solid rgb(185, 185, 185)");
        }
    }
});
$("li.subnav a").on("click", function() {
    $(this).css("color", "#000");
    let val=$(this).attr("data-index");
    for(let i=0; i<3; i++)
    {
        if(val!=i)
        {
            $("[data-index=" + i + "]").css("color", "rgb(185, 185, 185)");
        }
    }
});

let time1=setInterval(function() {
    if($(".mainheading").css("background-color")==="rgb(31, 175, 228)")
    {
        $(".mainheading").css("background-color","rgb(120, 93, 182)");
    }
    else
    {
        $(".mainheading").css("background-color","rgb(31, 175, 228)");
    }
}, 5000);