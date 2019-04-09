function pluck(paints, property) {
    return paints.map(function(element) {
        return element[property];
    });
}
