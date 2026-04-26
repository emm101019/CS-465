Architecture

In this project, I used a few different types of frontend development. On the Express side, I worked with HTML, CSS, JavaScript, routes, controllers, and views to build the customer-facing website. That side felt more like a traditional web app because the server helped render pages. I also used Handlebars to move from static HTML to templates. Later, I used Angular to build the admin side as a single-page application. The SPA felt different because it used components, services, and models, and it could update parts of the page without reloading the whole site.

The backend used a NoSQL MongoDB database because the project was built with the MEAN stack, and MongoDB fit well with the JavaScript-based tools used in the app. It was useful for storing trip data in a flexible way and made it easier to work with JSON-style data between the backend and frontend. MongoDB also worked well with Mongoose for schemas and models, which helped organize the data.

Functionality

JSON is different from JavaScript because JSON is just a format for storing and sending data, while JavaScript is a programming language. JSON helped connect the frontend and backend because the API returned trip data in JSON, and both the Express side and the Angular side could use that data. It was the piece that helped the database, backend, and frontend all work together.

During the full stack process, I refactored code several times. One example was moving from static HTML pages to Handlebars templates so the site could render data more dynamically. Another example was separating the API into its own app_api area instead of mixing database access into the website logic. I also refactored the Angular side by moving trip display logic into reusable UI components like the trip list and trip card. Reusable components help keep the code cleaner, easier to update, and easier to reuse in other parts of the app.

Testing

In a full stack application, methods like GET, POST, PUT, and DELETE are used to send and retrieve data through endpoints. Endpoints are the URLs the app uses to talk to the backend, like getting all trips or updating one trip. Testing these endpoints is important because each one has a different job. I used the browser and Postman to test that trip data could be returned, added, and updated correctly.

Testing got harder once security was added. After login authentication was set up, protected routes needed a valid token before they would work. That added extra steps because requests could fail with unauthorized errors if the token was missing or wrong. It showed me that security is important, but it also makes testing more detailed because you have to test both access and protection.

Reflection

This course helped me get more comfortable with how a full stack application is built from start to finish. Before this, I had less understanding of how the frontend, backend, database, API, and security all connect. Now I have more experience working through the whole process, even when parts of it got frustrating.

Some of the skills I learned and developed in this course include using Express, MongoDB, Mongoose, Angular, REST APIs, Handlebars, Postman, and login security with tokens. I also got more practice with GitHub, debugging, testing, and organizing code. I think these skills make me a stronger candidate because I now have experience building and testing a full stack project instead of only working on one part of an application.
