(function() {
    function Point(x, y, value, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.value = value || 0;
        this.color = color || 'black';
    }

    Point.prototype.add = function (point) {
        var newX = this.x + point.x;
        var newY = this.y + point.y;

        return new Point(newX, newY);
    };

    module.exports = Point;
})();
