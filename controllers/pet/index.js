exports.show = function(req, res, next) {
    res.render('show', {
        pet: req.pet
    });
};

exports.edit = function(req, res, next) {
    res.render('edit', {
        pet: req.pet
    });
};