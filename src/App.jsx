// Importing necessary modules and components from external files
import { useEffect, useState } from "react"; // Importing React hooks for managing state and side effects
import UserData from "./components/UserData.jsx"; // Importing the UserData component from an external file
import axios from 'axios'; // Importing Axios for making HTTP requests

// App component definition
const App = () => {
    // State variables initialization using the useState hook
    const [users, setUsers] = useState([]); // State variable to store user data fetched from the server
    const [formData, setFormData] = useState({ // State variable to store form data entered by the user
        name: '',
        surname: '',
        tc: '',
        fathername: '',
        mothername: '',
        dob: '',
        province: '',
        provincedetail: '',
        mothertc: '',
        fathertc: ''
    });

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        try {
            setUsers([]); // Clears the users state to prepare for new data
            // Sends a GET request to the server with form data as parameters
            const response = await axios.get('http://localhost:3000/person', { params: formData });
            console.log('Server Response:', response.data); // Logs the server response data to the console
            // If the response contains data, updates the users state with the received data
            if (response.data.length > 0) {
                setUsers(response.data);
            }
        } catch (error) {
            console.error('Error:', error); // Logs any errors that occur during the API request
        }
    };

    // Function to handle input changes in the form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructures the name and value properties from the input element
        setFormData({ ...formData, [name]: value }); // Updates the form data state with the new input value
    };

    // JSX structure representing the form and user data table
    return <>
        {/* Top-level div element with a class name */}
        <div className="App">
            <h1>Kişi Sorgulama</h1> {/* Heading for the form */}
            {/* Form element with input fields and event handlers */}
            <form onSubmit={handleSubmit}>
                {/* Input fields for various user data */}
                {/* Each input field is associated with a specific property in the form data state */}
                <label>Ad:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} /><br />
                {/* Input field for user's surname */}
                <label>Soyad:</label>
                <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} /><br />
                {/* Input field for user's TC (Türkiye Cumhuriyeti) number */}
                <label>TC:</label>
                <input type="text" name="tc" value={formData.tc} onChange={handleInputChange} /><br />
                {/* Input field for user's date of birth */}
                <label>Doğum Tarihi:</label>
                <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} /><br />
                {/* Input field for user's mother's name */}
                <label>Anne adı:</label>
                <input type="text" name="mothername" value={formData.mothername} onChange={handleInputChange} /><br />
                {/* Input field for user's father's name */}
                <label>Baba Adı</label>
                <input type="text" name="fathername" value={formData.fathername} onChange={handleInputChange} /><br />
                {/* Input field for user's mother's TC number */}
                <label>Anne TC:</label>
                <input type="text" name="mothertc" value={formData.mothertc} onChange={handleInputChange} /><br />
                {/* Input field for user's father's TC number */}
                <label>Baba TC:</label>
                <input type="text" name="fathertc" value={formData.fathertc} onChange={handleInputChange} /><br />
                {/* Input field for user's province */}
                <label>Nufus İl:</label>
                <input type="text" name="province" value={formData.province} onChange={handleInputChange} /><br />
                {/* Input field for user's detailed address within the province */}
                <label>Nufus İlçe:</label>
                <input type="text" name="provincedetail" value={formData.provincedetail} onChange={handleInputChange} /><br />
                {/* Submit button to trigger the form submission */}
                <button type="submit">Submit</button>
            </form>
            {/* Table to display user data */}
            <table>
                <thead>
                    {/* Table header row with column names */}
                    <tr>
                        <th>ADI</th>
                        <th>SOYADI</th>
                        <th>TC</th>
                        <th>DOĞUM TARİHİ</th>
                        <th>NUFUS İL</th>
                        <th>NUFUS İLÇE</th>
                        <th>ANNE ADI</th>
                        <th>ANNE TC</th>
                        <th>BABA ADI</th>
                        <th>BABA TC</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Rendering the UserData component and passing the users data as a prop */}
                    <UserData users={users} />
                </tbody>
            </table>
        </div> {/* Closing div for the main container */}
    </>
}

export default App; // Exporting the App component for use in other parts of the application
