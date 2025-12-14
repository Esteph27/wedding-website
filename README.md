# Wedding Website

#### Video Demo: <URL>

#### Description:
At the time of choosing a project to submit as part of CS50, I had recently booked my wedding venue for September 2026 and knew I would need a wedding website. After exploring existing website templates, I found them either too restrictive in terms of customisation or the ones I really liked were too expensive. This led me to build my own website as my final project.

By building the site from scratch, I was able to design and implement a solution tailored to my requirements rather than adapting my needs to an existing platform, making the project both practical and personally meaningful.

The website centralises all essential wedding information in a single application, including event details, venue and travel information, FAQs, Dress code and the ability to RSVP online. From a technical perspective, the project combines frontend development for layout and styling with backend logic for routing, templating, password validation, and form handling via an external API.

This is a full-stack web application built using Flask, Python, HTML, CSS, and JavaScript, and deployed on Fly.io. By enabling digital RSVPs, the website also helps to reduce unnecessary waste associated with traditional paper invitations and RSVP cards, while prioritising clean design, maintainability, and responsive behaviour across devices.

## Project Status

At the time of submission, the wedding is scheduled for next year. 
Some details will be updated after the CS50 submission deadline as wedding plans are finalised. The core structure and functionality will remain unchnaged.

## Features

- Responsive website for mobile and desktop devices

- Wedding event details, including date, time, and location

- Venue, travel, and accommodation information

- FAQs, registry, and dress code details

- RSVP form integrated with Formspree for form submission handling

- Client-side form validation using JavaScript

- Password-protected guest access with validation using Python

- Backend routing and templating using Flask

- Automated deployment to Fly.io using GitHub Actions, enabling instant updates to the live site

- Hosted on a custom domain

## Technologies used

- **Python**: Used to build the backend logic with Flask.

- **Flask**: Handles routing, template rendering, and application structure.

- **HTML**: Used to structure the website content.

- **CSS**: Used for styling and responsive layout.

- **JavaScript**: Used for client-side interactivity and form validation.

- **Freeform**: Used to handle RSVP form submissions and view responses without 
implementing a database.

- **Fly.io**: Used to deploy and host the application.

I chose not to use a database for this project because Freeform provides a simple and effective way to collect and view form submissions. Since the number of RSVP responses is limited and does not require complex querying or relationships, a database would have added unnecessary complexity.


## File Structure

## Design 

#### formspree:
## Database and Form Handling Decision

A deliberate design decision in this project was not to use a traditional SQL database for storing RSVP responses. While a database was considered, it was ultimately not necessary for the scope and requirements of this application.

The RSVP functionality is implemented using a third-party form handling service (Formspree / Freeform), which collects and presents submissions in a structured format. This approach was chosen because the data does not require complex querying, relationships, or long-term persistence within the application itself. RSVP responses only need to be viewed, not modified or processed programmatically.

Using a third-party service allowed the project to remain lightweight while still demonstrating key concepts such as form validation, HTTP requests, and integration with external tools. It also reflects real-world development practices, where existing services are often used to reduce complexity and maintenance overhead.

This decision allowed me to focus on application structure, frontend development, backend routing with Flask, and deployment automation, rather than introducing a database solely for the sake of using SQL.


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