| # | Test Category | Test Case | Expected Result | Actual Result | Status (Pass/Fail) |
|---|---------------|-----------|-----------------|---------------|---------------------|
| **Authentication & Security** |
| 1 | Login - Valid Password | User can log in with correct password | Redirects to home page, session authenticated | Valid password allows a redirect to home page | Pass |
| 2 | Login - Invalid Password | User cannot log in with wrong password | Shows "Incorrect password" error with shake animation, stays on login page | Shows "Incorrect password" error with shake animation, stays on login page | Pass|
| 3 | Login - Empty Password | Form validation prevents empty submission | HTML validation should prevent submission | HTML validation prevents submission, field shows required indicator | Pass |
| 4 | Login - Case Insensitive | Password is case-insensitive | Accepts password regardless of case, redirects to home | Accepts password regardless of case, redirects to home | Pass |
| 5 | Home page protection | Unauthenticated users cannot access home | Redirects to (login page) | Unauthenticated users cannot access home page| Pass |
| 6 | Other Page protection | Unauthenticated users can access other pages | Pages load without redirect (no auth required) | Unauthenticated users can access other pages | Pass |
| **Navigation** |
| 7 | Home Page Load | Home page displays correctly | Shows title "ESTEPHANIE & DAVID", date, venue link, countdown, navigation links | Shows title "ESTEPHANIE & DAVID", date, venue link, countdown, navigation links| Pass |
| 8 | RSVP Page | RSVP page accessible | Shows RSVP form with instructions | Shows RSVP form with instructions | Pass |
| 9 | Travel Page | Travel page accessible | Travel information displays | Travel information displays | Pass |
| 10 | Airbnb Page | Airbnb page accessible | Airbnb information displays | Airbnb information displays | Pass |
| 11 | Deal Page | Explore Deal page accessible | Deal information displays | Deal information displays | Pass |
| 12 | Schedule Page | Schedule page accessible | Schedule information displays | Schedule information displays | Pass |
| 13 | Dress Code Page | Dress code page accessible | Dress code information displays | Dress code information displays | Pass |
| 14 | FAQ Page | FAQ page accessible | FAQ content displays | FAQ content displays | Pass |
| 15 | Registry Page | Registry page accessible | Registry information displays | Registry information displays | Pass |
| 16 | Home Navigation Links | All navigation links on home work | Each link navigates to correct page | Each link navigates to correct page | Pass |
| 17 | Return Home Link | Return home link works from RSVP | Navigates back to home | Navigates back to home | Pass |
| **RSVP Form Functionality** |
| 18 | RSVP Form - Initial State | Form displays correctly on page load | Form shows name field, attending dropdown, submit button | Form shows name field, attending dropdown, submit button| Pass |
| 19 | RSVP - Select "Yes" | Selecting "Yes" shows attending fields | Shows dietary requirements dropdown, message field | Shows dietary requirements dropdown, message field | Pass |
| 20 | RSVP - Select "No" | Selecting "No" hides attending fields | Hides dietary requirements and message fields | Hides dietary requirements and message fields | Pass |
| 21 | RSVP - Dietary "Other" | Selecting "Other" shows custom input | Shows text input field for custom dietary requirements | Shows text input field for custom dietary requirements | Pass |
| 22 | RSVP - Dietary Non-Other | Selecting non-other hides custom input | Custom dietary input field hides and clears | Custom dietary input field hides and clears | Pass |
| 23 | RSVP - Required Fields Validation | Form validates required fields | HTML5 validation prevents submission, shows required indicators | HTML5 validation prevents submission, shows required indicators | Pass |
| 24 | RSVP - Submit "Yes" | Submitting with "Yes" shows success message | Form hides, shows "Thank you!" message and "RSVP for someone else?" link | Form hides, shows "Thank you!" message and "RSVP for someone else?" link | Pass |
| 25 | RSVP - Submit "No" | Submitting with "No" shows appropriate message | Form hides, shows "We'll miss you" message | Form hides, shows "We'll miss you" message | Pass |
| 26 | RSVP for Another | "RSVP for someone else" resets form | Form resets and shows again, all fields cleared | Form resets and shows again, all fields cleared | Pass |
| 27 | RSVP - Formspree Integration | Form data reaches Formspree | Submission appears in Formspree inbox | Submission appears in Formspree inbox | Pass |
| **UI/UX Elements** |
| 30 | Countdown Timer | Countdown displays correctly | Countdown timer shows time until 12.09.2026 | Countdown timer shows time until 12.09.2026 | Pass |
| 31 | Countdown Timer Accuracy | Countdown calculates correctly | Countdown matches expected time until wedding date | Countdown matches expected time until wedding date | Pass |
| 32 | Fade Animations | Fade animations work on home page | Elements fade in sequentially with delays | Elements fade in sequentially with delays | Pass |
| 33 | Footer Display | Footer shows on authenticated pages | Footer shows "E & D", date "12.09.2026", "Created by us" | Footer shows "E & D", date "12.09.2026", "Created by us" | Pass |
| 34 | Footer Hidden on Login | Footer hidden on login page | No footer displayed | No footer displayed | Pass |
| 35 | Scroll Down and Up Functionality | Scroll down and up links works | Page scrolls smoothly down to RSVP or up to top of page| Page scrolls smoothly to form and scrolls smoothly back up to top of page | Pass |
| 36 | External Links | External links open in new tab | Opens in new tab/window | Opens in new tab/window | Pass |
| 37 | Password Input Type | Password field is hidden | Characters are masked (dots) | Characters are masked (dots) | Pass |
| 38 | Error Message Animation | Error message shakes on wrong password | Error message appears with shake animation | Error message appears with shake animation | Pass |
| 39 | Favicon Display | Favicon shows on all pages | Favicon appears on each page | Favicon appears on each page | Fail |
| **Responsive Design** |
| 40 | Mobile Viewport | Site works on mobile devices | Layout adapts, text readable, buttons clickable | All pages, images and components are responsive on modbile devices| Pass |
| 41 | Tablet Viewport | Site works on tablet devices | Layout adapts appropriately | All pages,images and components are responsive on tablet and laptop devices | Pass |
| 42 | Desktop Viewport | Site works on desktop | Full layout displays correctly | All pages, images and components are responsive on desktop devices | Desktop |
| **Error Handling** |
| 43 | Formspree Error Handling | Error shown if Formspree fails | Error message appears with animation | Error message appears and "shakes" on screen every time an incorrect password is submitted | Pass |
