(function() {

    var $list = $('#list_wrapper').find('ul');
    var listValues = [];

    function addToList(data) {
        var newItem = {
            value: data,
            done: false
        };

        listValues.push(newItem);

        renderList();
    }

    function markItemDone(data) {
        var slotNum = data.slotNum;

        listValues[slotNum].done = data.isDone;

        if (listValues[slotNum].done) {
            $('.checkbox [data-number="'+data.slotNum+'"]').addClass('done');
        } else {
            $('.checkbox [data-number="'+data.slotNum+'"]').removeClass('done');
        }

        renderList();
    }

    function renderList() {
        var listHTML = '';
        var isDone, addLine;

        for (var i = 0; i < listValues.length; i++) {
            isDone = listValues[i].done ? 'checked' : '';
            addLine = isDone ? 'class="done"' : '';

            listHTML += '<li><input type="checkbox" class="checkbox" data-number="' + i + '" ' + isDone + ' /><span ' + addLine + '>' + listValues[i].value + '</span></li>';
        }

        $list.html(listHTML);
    }

    $list.on('change', '.checkbox', function() {
        var slotNum = $(this).attr('data-number');
        var data = {
            slotNum: slotNum,
            isDone: this.checked
        };
        events.emit('itemMarkedDone', data);
    });

    events.on('addToDoItem', addToList);
    events.on('itemMarkedDone', markItemDone);

})();