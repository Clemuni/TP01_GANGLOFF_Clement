$('#lastname').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#firstname').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#address').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#postalCode').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#city').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#phoneNumber').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#email').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#civility').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#login').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});

$('#password').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});
$('#confirmPassword').on('input', function () {
    const input = $(this);
    const errorMessage = input.parent().find('.error.required');
    if (input.val()) {
        input.removeClass('invalid');
        errorMessage.removeClass('show');
    } else {
        input.addClass('invalid');
        errorMessage.addClass('show');
    }
});
