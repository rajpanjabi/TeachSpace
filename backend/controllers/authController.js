import passport from 'passport';

// Redirect to Google for authentication
export const googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// Google callback route
export const googleCallback = passport.authenticate('google', {
  failureRedirect: '/login',
  successRedirect: '/dashboard',
});

// Profile route
export const profile = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.status(200).json({ user: req.user });
};