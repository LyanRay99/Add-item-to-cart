$('.header__icon').on('click', function () {
    $('.modal').css('display', 'block');
});


$('.icon').on('click', function () {
    $('.modal').css('display', 'none');
});

$('.addItem').on('click', function () {
    var addItem = $($(this).parent());
    addItem.addClass('add_box_item');
    console.log(addItem);
    console.log($('.modal__item__itemAll').children());

    $(".add_box_item").clone().appendTo(".modal__item__itemAll");
    addItem.removeClass("add_box_item");
    let removeClass_item = $('.add_box_item');
    removeClass_item.removeClass("add_box_item");
    console.log(addItem);
    console.log($('.modal__item__itemAll').children());
});