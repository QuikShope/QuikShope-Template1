function bindTask( triggerName, triggerType, callbackFunction) {
    $(`[task-trigger='${triggerName}']`).bind(triggerType,callbackFunction);
}

// Main functions


$("[sidebar-link-target]").bind("click",function (element) {
    if(element.target !== this){
        return;
    }
    console.log(element.target.getAttribute("sidebar-link-name"));
    hideSidebar();
    console.log(element.target.getAttribute("sidebar-link-target"))
    // window.location.href = element.target.getAttribute("sidebar-link-target");
})


bindTask("sidebar-toggle","click", function (element) {
    let sideMenu = $("[element-target='sideMenu']");
    if(sideMenu.attr('class').includes('hide')){
        sideMenu.removeClass('hide');
        sideMenu.addClass('show');
        $(".wrapper").removeClass('opacity-100');
        $(".wrapper").addClass('opacity-50');
        $("#hamicon").html('<i class="fas fa-times fa-lg me-2"></i>');
    }else{
        sideMenu.removeClass('show');
        sideMenu.addClass('hide');
        $(".wrapper").removeClass('opacity-50');
        $(".wrapper").addClass('opacity-100');
        $("#hamicon").html('<i class="fas fa-bars fa-lg me-2"></i>');
    }
})

function hideSidebar(){
    let sideMenu = $("[element-target='sideMenu']");
    if(sideMenu.attr('class').includes('show')){
        sideMenu.removeClass('show');
        sideMenu.addClass('hide');
        $(".wrapper").removeClass('opacity-50');
        $(".wrapper").addClass('opacity-100');
        $("#hamicon").html('<i class="fas fa-bars fa-lg me-2"></i>');
    }
}

bindTask("sidebar-hide","click", hideSidebar)
