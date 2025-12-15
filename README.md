# Wedding Website

#### Video Demo: <URL>

#### Live Site: https://estephanddavid.com/

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

```
.
├── .github/
│   └── workflows/
│       └── fly-deploy.yml      # GitHub Actions workflow for automated deployment
├── static/
│   ├── css/
│   │   └── style.css          # Styling and responsive layout
│   ├── js/
│   │   ├── countdown.js        # Countdown to wedding day
│   │   ├── login.js            # Prevents page reload on incorrect password
│   │   ├── rsvp.js             # RSVP form interactivity
│   │   ├── scrolldown.js       # Scroll down function
│   │   └── visited.js          # Prevents home page animations on repeat visits
│   └── images/
│       ├── formspree.jpg       # Screenshot used in README
│       └── full-dress-code.jpg # Dress code image
├── templates/
│   ├── base.html               # Base template
│   ├── index.html              # Password-protected login page
│   ├── home.html               # Homepage
│   ├── rsvp.html               # RSVP page
│   ├── schedule.html           # Wedding weekend schedule
│   ├── travel.html             # Venue and travel information page
│   ├── airbnb.html             # Accommodation recommendations
│   ├── deal.html               # Activities recommendations
│   ├── registry.html           # Registry page
│   └── faq.html                # FAQs page
├── .dockerignore               # Files to ignore in Docker builds
├── .gitignore                  # Files to ignore in Git version control
├── app.py                      # Main Flask application and route definitions
├── Dockerfile                  # Docker configuration for Fly.io deployment
├── fly.toml                    # Fly.io application configuration
├── README.md                   # Project documentation
├── requirements.txt            # Python dependencies
└── robots.txt                  # Control search engine indexing

```

## Design

#### Frontend 

The frontend is built using HTML, CSS, and JavaScript. HTML provides the structural layout of the website, while CSS is responsible for styling, animations, and responsive layouts across mobile and desktop devices. JavaScript is used to enhance interactivity and dynamic behaviour, such as adapting form fields based on user input (for example, conditionally displaying additional fields for dietary requirements), handlingn browser sessions, implementing a countdown to the wedding date, and enabling smooth scrolling between sections.

This combination ensures a smooth, user-friendly experience while keeping the frontend logic focused on usability and presentation.

#### Backend

The backend is built using Flask, which handles routing, templating, and overall application structure. Pages use Jinja templates to render content dynamically and password-protected access ensures that only invited guests can view the content of the website.

Password validation is handled on the backend using environment variables, with values defined locally for development and securely configured as `secrets` in Fly.io for production. This avoids hardcoding sensitive information in the codebase and follows basic security best practices. Backend logic verifies user input before granting access, while frontend JavaScript manages the user interaction.

This separation of concerns keeps the backend focused on application logic and security, while the frontend handles presentation and interactivity.

#### RSVP form Handling

The RSVP form is implemented using [Formspree](https://formspree.io/), a third-party service that handles form submissions securely, including data validation. Formspree also provides email notifications, a dashboard to view all submissions, and analytics.

Because Formspree effectively manages all aspects of form collection and viewing, I chose not to use a database for this project. While a database was initially considered, it was unnecessary: the data does not require complex querying, relationships, or long-term persistence within the application. RSVP responses only need to be viewed, not modified or processed programmatically.

This approach keeps the website lightweight while taking advantage of Formspree’s built-in features, including email notifications for each submission, which makes it easy to track RSVPs in real time.

<img src="static/images/formspree.jpg" alt="Formspree Dashboard" width="600">

*Screenshot shows example responses in the Formspree dashboard. All data is test information.*


#### Platform hosting

The project was initially hosted on AWS Amplify, as the website was originally planned as a static application. Amplify provides a simple and cost-effective way to deploy static sites quickly and was well suited for the early version of the project.

As the scope evolved, the website was refactored into a Flask application to support dynamic routing, server-side templating, and more secure password handling. During this transition, it became clear that the project would benefit from a hosting platform capable of running a backend application with minimal setup and overhead.

After evaluating several options, Fly.io was selected due to its native Docker support, lightweight configuration, and ability to deploy applications close to users geographically. This was particularly important given that guests will be accessing the site from Europe, North America, and Japan. Fly.io also made it straightforward to integrate a custom domain, allowing the domain purchased through AWS Route 53 to be linked directly to the deployed application.

#### CI/CD

Deployment is automated using Fly.io’s integration with GitHub Actions. When the application was initially deployed to Fly.io, a GitHub Actions workflow was generated to handle future deployments. This workflow triggers on pushes to the `main` branch, automatically building a Docker image of the application and deploying it to Fly.io.

Any changes pushed to the repository are automatically deployed to the live site, reducing manual steps and ensuring consistency between local development and production. While additional automation or features could be added, this workflow provides sufficient functionality for the scope of the website.

#### Testing

## How to run locally

To run the wedding website locally, follow these steps:

**Prerequisites:**
- Python 3.10+ installed

- pip (Python package manager)

- (Optional) Docker if you want to run via container

**Steps:**
1. Clone the repository
    ```
    git clone https://github.com/Esteph27/wedding-website.git
    cd wedding-website
    ```

2. Set up a virtual environment
    ```
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    ```

3. Install dependencies
    ```
    pip install -r requirements.txt
    ```

4. Set environment variables

Create a `.env` file in the project root with your secret values:
    ```
    PASSWORD=<choose-a-password>
    FLASK_SECRET_KEY=<your-secret-key>  # Optional, for session security
    ```

5. Run flask application
    ```
    export FLASK_APP=app.py
    export FLASK_ENV=development
    flask run
    ```

Open your browser at http://127.0.0.1:5000 to view the website locally.

6. Run using Docker (optional)
    ```
    docker build -t wedding-website .
    docker run -p 5000:5000 wedding-website
    ```

Then open your browser at http://127.0.0.1:5000.

**Notes:**

- RSVP submissions locally will only work if you have your own Formspree account and endpoint. The current endpoint in the project is private, so you will not receive notifications or see submissions unless you replace it with your own.

- The password for accessing protected pages is not included in the repository. You will need to create your own `.env` file with a `PASSWORD` (and optionally `FLASK_SECRET_KEY`) to run the site locally.

## Deployment

The wedding website is deployed on [Fly.io](https://fly.io/), which allows the Flask application to run as a containerised service accessible worldwide. Deployment is automated via GitHub Actions:

**1. CI/CD Workflow**

- Any push to the `main` branch triggers the Fly.io GitHub Actions workflow.

- The workflow builds a Docker image of the application and deploys it to Fly.io automatically.

- This ensures the live site is always up-to-date with the latest changes.

**2. Custom Domain**

- The website is linked to a custom domain purchased via AWS Route 53. Fly.io automatically routes traffic to the live application using this domain. 

**3. Environment Variables**

- Secrets such as `PASSWORD` and `FLASK_SECRET_KEY` are configured in Fly.io’s environment settings. This keeps sensitive data secure and separate from the codebase. 


## Linters

## Bug fixes and known bugs

#### Fixing the 500 Error on Fly.io Login

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


## Acknowledgements

- CS50 course material for foundational guidance in Flask and web development.

- [Formspree](https://formspree.io/) for providing a simple way to handle form submissions and notifications.

- [Fly.io](https://fly.io/) documentation for guidance on containerised deployment and CI/CD integration.

- Open-source resources, libraries, and code snippets used throughout the project.

- Friends and family for testing the website and providing feedback on usability and design.

- My Fiance David for always supporting me ❤️