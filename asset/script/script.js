function expand() {
    for (var i=0; i<$(".expandable").length; i++) {
        $(".expandable")[i].addEventListener("click", (event)=> {
            console.log("expandable clicked.");
            $(event.target).parent("div").addClass("expandedWrapper");
            $(event.target).parent("div").parent("div").removeClass("col-4").addClass("expanded");

            // exit expand
            $(".expanded")[0].addEventListener("click", (event)=> {
                console.log("return to normal");
                $(event.target).parent("div").removeClass("expandedWrapper");
                $(event.target).parent("div").parent("div").removeClass("expanded").addClass("col-4");
                // expand();
            })
        })
    }
};


var expand2 = () => {
    var expandables = document.getElementsByClassName("expandable");
    var inspector = document.getElementById("inspector");
    for (var i=0; i < expandables.length; i++) {
        expandables[i].addEventListener("click", (event) => {
            console.log("expandable clicked.");
            inspector.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            inspector.style.zIndex = "1";
            inspector.style.position = "fixed";
            $("#inspectorImg").attr("src", event.target.src);
        })
    }
    var inspectComponents = document.getElementsByClassName("inspect");
    for (var i=0; i < inspectComponents.length; i++) {
        inspectComponents[i].addEventListener("click", () => {
            $("#inspectorImg").attr("src", "#");
            inspector.style.position = "static";
        })
    }
    return "expand2 active"
};

expand2();

var navMouseover = () => {
    var myNavlinks = document.getElementsByClassName("myNavlink");
    for (var i=0; i < myNavlinks.length; i++) {
        myNavlinks[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "aqua";
            event.target.style.border = "1px solid #f148fb";
        });
        myNavlinks[i].addEventListener("mouseout", (event) => {
            event.target.style.backgroundColor = "inherit";
            event.target.style.border = "";
        })
    };
    return "navMouseover active"
};

navMouseover()

var navToggle = () => {
    window.addEventListener("scroll", (event) => {
        console.log(window.scrollY);
        if (window.scrollY > 5 ) {
            $("#myNav").fadeOut();
        }
        if (window.scrollY === 0 ) {
            $("#myNav").fadeIn();
        }
    })
}

navToggle()