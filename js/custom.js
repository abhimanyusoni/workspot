$('.username').click(function(){
    $(this).siblings('.profile-inner').toggleClass('opened');
    $(this).toggleClass('toggled');
})

$(document).mouseup(function(e) 
{
    var container = $(".username");
    var menu = $(".profile-inner");

    // if the target of the click isn't the container nor a descendant of the container
    if ((!container.is(e.target) && container.has(e.target).length === 0) && ((!menu.is(e.target) && menu.has(e.target).length === 0)))
    {   
        menu.removeClass('opened');
        container.removeClass('toggled')
    }
});

$('.mobile-menu-toggler').click(function(){
    $('.site-header .header_wrapper .main-menu').toggleClass('show');
    $(this).children('span').toggleClass('close-btn');
})

$(document).mouseup(function(e) 
{
    var container = $(".mobile-menu-toggler");
    var menu = $(".site-header .header_wrapper .main-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if ((!container.is(e.target) && container.has(e.target).length === 0) && ((!menu.is(e.target) && menu.has(e.target).length === 0)))
    {   
        menu.removeClass('show');
        container.children('span').removeClass('close-btn');
    }
});