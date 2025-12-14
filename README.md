# Wedding Website

#### Video Demo: <URL>

#### Description:
At the time of choosing a project to submit as part of CS50, I had recently booked my wedding venue for September 2026 and knew I would need a wedding website. After exploring existing website templates, I found them either too restrictive in terms of customisation or the ones I really liked were too expensive. This led me to build my own website as my final project.

By building the site from scratch, I was able to design and implement a solution tailored to my requirements rather than adapting my needs to an existing platform, making the project both practical and personally meaningful.

The website centralises all essential wedding information in a single application, including event details, venue and travel information, FAQs, Dress code and the ability to RSVP online. From a technical perspective, the project combines frontend development for layout and styling with backend logic for routing, templating, password validation, and form handling via an external API.

This is a full-stack web application built using Flask, Python, HTML, CSS, and JavaScript, and deployed on Fly.io. By enabling digital RSVPs, it helps to reduce unnecessary waste associated with traditional paper invitations and RSVP cards, while prioritising clean design, maintainability, and responsive behaviour across devices.

## Project Status

At the time of submission, the wedding is scheduled for next year. 
Some details will be updated after the CS50 submission deadline as wedding plans are finalised. The core structure and functionality will remain unchanged.

## Features

- Responsive website for mobile and desktop devices

- Wedding event details, including date, time, and location

- Venue, travel, and accommodation information

- FAQs, registry, and dress code details

- RSVP form integrated with Freeform for submission handling and dashboard viewing

- Client-side form validation using JavaScript

- Password-protected guest access with validation using Python

- Backend routing and templating using Flask

- Automated deployment to Fly.io using Docker and GitHub Actions, enabling instant updates to the live site

- Hosted on a custom domain

## Technologies used

- **Python**: Used to build the backend logic with Flask.

- **Flask**: Handles routing, template rendering, and application structure.

- **HTML**: Used to structure the website content.

- **CSS**: Used for styling and responsive layout.

- **JavaScript**: Used for client-side interactivity and form validation.

- **Freeform**: Used to handle RSVP form submissions and view responses without 
implementing a database.

- **Fly.io**: Used to host the application.

- **Github Actions**: Automates deployment, integrated with Fly.io.

- **Docker**: Used to containerise the application for deployment on Fly.io.

- **Custom Domain**: Personalises our web address 


## File Structure

## Design

#### Frontend

The frontend is built using HTML, CSS, and JavaScript. HTML provides the structural layout of the website, while CSS is responsible for styling, animations, and responsive layouts across mobile and desktop devices. JavaScript is used to enhance interactivity and dynamic behaviour, such as adapting form fields based on user input (for example, conditionally displaying additional fields for dietary requirements), handling login, implementing a countdown to the wedding date, and enabling smooth scrolling between sections.

This combination ensures a smooth, user-friendly experience while keeping the frontend logic focused on usability and presentation, with form submission and validation delegated to an external service.

#### Backend

The backend is built using Flask, which handles routing, templating, and overall application structure. Pages use Jinja templates to render content dynamically and password-protected access ensures that only invited guests can view the content of the website. Backend logic also manages form validation and integration with Freeform. This separation of concerns keeps the backend focused on application logic while the frontend handles presentation and interactivity.

#### RSVP form Handling

The RSVP form is implemented using [Formspree](https://formspree.io/), a third-party service that handles form submissions securely, including data validation. Formspree also provides email notifications, a dashboard to view all submissions, and analytics.

Because Formspree effectively manages all aspects of form collection and viewing, I chose not to use a database for this project. While a database was initially considered, it was unnecessary: the data does not require complex querying, relationships, or long-term persistence within the application. RSVP responses only need to be viewed, not modified or processed programmatically.

This approach keeps the website lightweight while taking advantage of Formspree’s built-in features, including email notifications for each submission, which makes it easy to track RSVPs in real time.

<img src="static/images/formspree.jpg" alt="Formspree Dashboard" width="600">

*Screenshot shows example responses in the Formspree dashboard. All data is test information.*

## How to run the project locally

## Testing

## Bug fixes 

### Fixing the 500 Error on Fly.io Login

When deploying the login page to Fly.io, you may encounter a 500 Internal Server Error when entering the correct password.

Cause:

The Flask index() route was using redirect() for successful login. Since the login form uses AJAX, the redirect response breaks JSON parsing in the browser.

session["authenticated"] requires app.secret_key to be set. Without a FLASK_SECRET_KEY in the environment, setting the session triggers a 500 error.

Solution:

Remove the server-side redirect — the index() route now returns JSON for both success and failure, and login.js handles the redirect:

```
if password == PASSWORD.lower():
    session["authenticated"] = True
    return jsonify({"success": True})  # JS handles redirect
```

Set the required secrets in Fly.io:

```fly secrets set FLASK_SECRET_KEY="some-long-random-string"```
```fly secrets set PASSWORD="your-password-here"```


Result:
Wrong password → error message with shake animation appears
Correct password → JSON response → JS redirects to /home

No more 500 errors in production



## Deployment


set flask secret key in fly.io
set password in fly.io
fly.io api keys

## Acknowledgements