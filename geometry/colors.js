(function(){
    var Colors = function() {
        var colors = ['aqua', 'lime', 'silver', 'black', 'blue', 'navy', 'white',
            'fuchsia', 'olive', 'yellow', 'gray', 'purple', 'green', 'red'];

        this.randomColor = function () {
            return colors[Math.floor(Math.random() * colors.length )];
        };
    }
    module.exports = Colors;
})();
