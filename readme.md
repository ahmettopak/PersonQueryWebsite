# Person Query Application

This React application allows users to input various personal details (name, surname, TC number, date of birth, parents' names and TC numbers, as well as address information) and submit a query. When the form is submitted, it sends a GET request to a server endpoint with the form data as parameters. The response from the server, an array of user data, is displayed in a table below the form.

## How to Use

1. Clone the application to your local environment:

```
git clone <repository-link>
cd <repository-folder>
```

2. Install the required dependencies by running the following command in your terminal:

```
npm install
```

3. Start the server:

```
npm start
```

4. Go to [http://localhost:3000](http://localhost:3000) in your web browser.

5. Fill out the required personal details in the form and submit the query by clicking the "Submit" button.

6. The data received from the server will be displayed in a table below the form.

## Technologies Used

- **React:** Used for the user interface and component management.
- **Axios:** Used for making HTTP requests to the server.

## Main Files and Folders

- **App.js:** Main application component.
- **UserData.jsx:** Component used to display user data in a table.
- **components/:** Folder containing application components.
- **README.md:** This file; provides information on how to run the application, the technologies used, and other important details.

## Important Notes

- Ensure that the server application (for example: http://localhost:3000) is running.
- The application requires an internet connection to receive data from the server after submitting the form.

---

This README file provides comprehensive guidance to users on how to use the application, the technologies used, and other essential information. It includes details on how to run the application and the steps to be followed.
