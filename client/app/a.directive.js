export default blueImpFix;

function blueImpFix() {
    function prevent(e) {
        e.preventDefault();
    }
    function unprevent() {
        $(this).unbind('click', prevent);
    }
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if('gallery' in attrs) {
                elem.bind('click', prevent).on('$destroy', unprevent);
            }
            return elem;
        }
    };

}