import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function DangerAlert({ show, text }) {

    const [showState, setShowState] = useState(show);

    // Prop değeri değiştiğinde state'i güncelle
    useEffect(() => {
        setShowState(show);
    }, [show]);
    if (showState) {
        console.log("asdad");
        return (
            <Alert
                variant="danger"
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#1adee8', // Arka plan rengi
                    color: '#ffffff', // Metin rengi
                    border: '1px solid #1adee8', // Kenarlık rengi ve kalınlığı
                    borderRadius: '8px', // Köşe yuvarlaklığı
                    padding: '20px', // İç boşluk
                    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)' // Gölge efekti
                }}>
                {text}
            </Alert>
        );
    }
    else {
        console.log("else");
        return "";
    }

}

export default DangerAlert;