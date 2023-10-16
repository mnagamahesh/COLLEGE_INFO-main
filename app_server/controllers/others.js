const About = (req, res) => {
    res.render('generic-text', { title: 'About' });
};
const signin = (req, res) => {
    res.render('signin', { title: 'signin' });
    content: 'Loc8r is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
};
const register = (req, res) => {
    res.render('register', { title: 'register' });
    content: 'College Info is the application you’ll build throughout this book. It displays differently on different devices, showing a list of colleges and details about each college, and allows students to log in and leave reviews.Register and give the honest reviews on colleges.'
};

   module.exports = {
    About,
    signin,
    register
   };