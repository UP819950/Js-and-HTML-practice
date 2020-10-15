function test(){

    // document.getElementById("p1").innerHTML = "test complete";

    let test = "Here is some text";
    $("#p1").text(test);

    let template = document.getElementById("example-template").innerHTML;
    let templateScript = Handlebars.compile(template);
    let context = { title: "My name", name: "Mathew " };
    let html = templateScript(context);

    $("#container").append(html);

}





// var e = 6
