(function() {

    var $input = $('#todo_input');
    var $form = $('#todo_form');
    var inputValue;

    $form.on('submit', function(e) {
        e.preventDefault();

        saveValue();
    });

    function saveValue() {
        inputValue = $input.val();

        if (inputValue !== '') {
            events.emit('addToDoItem', inputValue);
        }

        $input.val('');
    }

})();