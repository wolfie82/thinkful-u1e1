(function(){
    $(document).ready(function() {
        // Focus for input
        $("input:text").first().focus();

        // On addition
        $("#button-addition").click(function() {
            arithmetic('+');
        });

        // On subtraction
        $("#button-subtraction").click(function() {
            arithmetic('-');
        });

        // Functions
        function getX () {
            return $("#value-x").val();
        }

        function getY () {
            return $("#value-y").val();
        }

        function updateResult (result, error) {
            $("p.result").css({'color' : 'black'}).text(result);
            if (error) $("p.result").css({'color' : 'red'}).fadeIn(100).fadeOut(100).fadeIn(100);
        }

        function arithmetic (operator) {
            var x = getX();
            var y = getY();

            if ((isNaN(x) || isNaN(y)) || (!x || !y)) {
                return updateResult("Please input numbers only", true);
            }

            if (operator === '+') {
                var result = parseInt(x) + parseInt(y);
                return updateResult(x + " + " + y + " = " + result);
            } else {
                var result = parseInt(x) - parseInt(y);
                return updateResult(x + " + " + y + " = " + result);
            }
        }
    });
})();