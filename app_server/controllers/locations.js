const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
};
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
};
const locationInfo1 = (req, res) => {
    res.render('location-info1', { title: 'Location info1' });
};
const locationInfo2 = (req, res) => {
    res.render('location-info2', { title: 'Location info2' });
};  
    module.exports = {
        homelist,
        locationInfo,
        addReview,
        locationInfo1,
        locationInfo2
    };