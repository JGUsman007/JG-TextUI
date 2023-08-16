window.addEventListener('message', function(event) {
    let data = event.data
    if (event.data.type == 'showui') {
        $(".title").html(data.title);
        $(".input-show").html(data.input);
        $(".input-effect").html(data.input);
        $(".description").html(data.description);
        $("body").fadeIn();
    }
    if (event.data.type == 'click') {
        $(".input-effect").fadeIn();
        setTimeout(() => { $(".input-effect").hide(); }, 300);
        
    }
    if (event.data.type == 'hideui') {
        $("body").fadeOut();
    }
})