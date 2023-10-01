import { useEffect, useState } from "react";
import UserData from "./components/UserData.jsx";
import axios from 'axios';

const App = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setUsers([]);
            const response = await axios.get('http://localhost:3000/person', { params: formData });
            console.log('Server Response:', response.data);
            if (response.data.length > 0) {
                setUsers(response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return <>

        <div className="App">
            <h1>Kişi Sorgulama</h1>

            <form onSubmit={handleSubmit}>

                <label>Ad:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} /><br />

                <label>Soyad:</label>
                <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} /><br />

                <label>TC:</label>
                <input type="text" name="tc" value={formData.tc} onChange={handleInputChange} /><br />

                <label>Doğum Tarihi:</label>
                <input type="text" name="dob" value={formData.dob} onChange={handleInputChange} /><br />

                <label>Anne adı:</label>
                <input type="text" name="mothername" value={formData.mothername} onChange={handleInputChange} /><br />

                <label>Baba Adı</label>
                <input type="text" name="fathername" value={formData.fathername} onChange={handleInputChange} /><br />

                <label>Anne TC:</label>
                <input type="text" name="mothertc" value={formData.mothertc} onChange={handleInputChange} /><br />

                <label>Baba TC:</label>
                <input type="text" name="fathertc" value={formData.fathertc} onChange={handleInputChange} /><br />

                <label>Nufus İl:</label>
                <input type="text" name="province" value={formData.province} onChange={handleInputChange} /><br />

                <label>Nufus İlçe:</label>
                <input type="text" name="provincedetail" value={formData.provincedetail} onChange={handleInputChange} /><br />

                <button type="submit">Submit</button>
            </form>
            <table>
                <thead>
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
                    <UserData users={users} />
                </tbody>
            </table>
        </div>

    </>
}

export default App;

