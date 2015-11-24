


$(document).ready(function () {
    $(document).on('click', ".daily", function () {
        $('#daily').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".weekly", function () {
        $('#weekly').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".bi-weekly", function () {
        $('#bi-weekly').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".monthly", function () {
        $('#monthly').append('<div class="new-row"><input placeholder="Type goal"></input> <span class="remove">X</span></div>');
    });

    $(document).on('click', ".remove", function () {
        $(this).parent('div').remove();
    });

    $(document).on('click', ".ok", function () {
        $(this).parent('div').addClass('fade-out');
    });

});

