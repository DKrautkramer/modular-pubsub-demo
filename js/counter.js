(function() {
    var totalItems = 0;
    var doneTotal = 0;
    var $todoTotal = $('#todo_total');
    var $todoDone = $('#todo_done');

    function updateTotals() {
        totalItems += 1;

        renderTotals();
    }

    function updateDoneTotal(data) {
        if (data.isDone) {
            doneTotal += 1;
        } else {
            doneTotal -= 1;
        }

        renderTotals();
    }

    function renderTotals() {
        $todoTotal.html('Items Total: ' + totalItems);
        $todoDone.html('Items Done: ' + doneTotal);
    }

    events.on('addToDoItem', updateTotals);
    events.on('itemMarkedDone', updateDoneTotal);
})();