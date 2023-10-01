// Importing necessary modules and components from external files
import { useEffect, useState } from "react"; // Importing React hooks for managing state and side effects
import UserData from "./UserData.jsx"; // Importing the UserData component from an external file
import axios from 'axios'; // Importing Axios for making HTTP requests
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// App component definition

const notify = () => toast("Wow so easy!");

const PersonQueryPage = () => {
    // State variables initialization using the useState hook
    const initialFormData = {
        name: "",
        surname: "",
        tc: "",
        dob: "",
        mothername: "",
        fathername: "",
        mothertc: "",
        fathertc: "",
        province: "",
        provincedetail: "",
    };
    const [users, setUsers] = useState([]); // State variable to store user data fetched from the server
    const [formData, setFormData] = useState(initialFormData);

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
                notify();
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
    const resetForm = () => {
        setUsers([]); // Clears the users state to prepare for new data
        setFormData(initialFormData);
        toast.info('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    };

    // JSX structure representing the form and user data table
    return <>
        {/* Top-level div element with a class name */}
        <div className="App">
            <h1>Kişi Sorgulama</h1> {/* Heading for the form */}
            {/* Form element with input fields and event handlers */}
            <form onSubmit={handleSubmit} className="form-container" id="form">
                {/* Input fields for various user data */}
                <ul class="flex-container">
                    <li class="flex-item"> <div className="form-row">

                        {/* Each input field is associated with a specific property in the form data state */}
                        <label>Ad:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item"> <div className="form-row">

                        {/* Input field for user's surname */}
                        <label>Soyad:</label>
                        <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item"> <div className="form-row">

                        {/* Input field for user's TC (Türkiye Cumhuriyeti) number */}
                        <label>TC:</label>
                        <input type="text" name="tc" value={formData.tc} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item"> <div className="form-row">

                        {/* Input field for user's date of birth */}
                        <label>Doğum Tarihi:</label>
                        <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item">  <div className="form-row">

                        {/* Input field for user's mother's name */}
                        <label>Anne adı:</label>
                        <input type="text" name="mothername" value={formData.mothername} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item"> <div className="form-row">

                        {/* Input field for user's father's name */}
                        <label>Baba Adı</label>
                        <input type="text" name="fathername" value={formData.fathername} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item">  <div className="form-row">

                        {/* Input field for user's mother's TC number */}
                        <label>Anne TC:</label>
                        <input type="text" name="mothertc" value={formData.mothertc} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item">  <div className="form-row">

                        {/* Input field for user's father's TC number */}
                        <label>Baba TC:</label>
                        <input type="text" name="fathertc" value={formData.fathertc} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item">   <div className="form-row">
                        {/* Input field for user's province */}
                        <label>Nufus İl:</label>
                        <input type="text" name="province" value={formData.province} onChange={handleInputChange} />
                    </div></li>
                    <li class="flex-item">   <div class="form-row">
                        {/* Input field for user's detailed address within the province */}
                        <label>Nufus İlçe:</label>
                        <input type="text" name="provincedetail" value={formData.provincedetail} onChange={handleInputChange} />

                    </div></li>
                </ul>
                {/* Submit button to trigger the form submission */}
                <button type="submit">Sorgula</button>
                <button type="button" onClick={resetForm}>Temizle</button>

            </form >
            <div class="table-container">

                {/* Table to display user data */}
                < table >
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
                </table >
            </div>
        </div > {/* Closing div for the main container */}
    </>
}

export default App; // Exporting the App component for use in other parts of the application