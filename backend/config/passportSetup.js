import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import Teacher from '../models/teacher.js';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/dashboard', // Change this to your production callback URL
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            // Look for the teacher in the database by their Google ID
            let teacher = await Teacher.findOne({ googleId: profile.id });
            // If teacher doesn't exist, create a new teacher record, without the password field
            if (!teacher) {
              teacher = new Teacher({
                googleId: profile.id,          // Store the Google ID
                name: profile.displayName,     // Store the name from Google
                email: profile.emails[0].value, // Store the email from Google
                subjects: [],                  // Can be empty or populate later
                createdAt: new Date(),
              });
              await teacher.save(); // Save the teacher to the database
            }
        
            // Return the teacher object after authentication
            return done(null, teacher);
          } catch (error) {
            return done(error, null);
          }
        }));

//       // Find or create user in the database here
//       // In this example, we are simply sending the profile back
//       console.log('Google profile:', profile);
//       done(null, profile);
//     }
//   )
// );

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});