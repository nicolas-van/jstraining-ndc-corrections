
(function () {
    "use strict";

    $(function() {

        $("form").submit(function(e) {
            e.preventDefault();
            var text = $("input").val();
            $("form").after($("<div class='panel panel-default'><div class='panel-body'>" + text + "</div></div>"));
        });

    });

})();
