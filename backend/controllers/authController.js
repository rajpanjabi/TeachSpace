import passport from 'passport';

// Redirect to Google for authentication
export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});


export const googleCallback = (req, res, next) => {
  passport.authenticate('google', { failureRedirect: '/login' }, (err, user) => {
    if (err || !user) {
      return res.redirect('/login'); // Redirect to login on failure
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.redirect('/login');
      }

      // Extract teacher's name and encode it for the URL
      const teacherName = encodeURIComponent(user.name.replace(/\s+/g, '-')); // Convert spaces to hyphens
      return res.redirect(`http://localhost:5173/dashboard/${teacherName}`);
    });
  })(req, res, next);
};




// Profile route
export const profile = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.status(200).json({ user: req.user });
};