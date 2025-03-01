import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [msg, setMsg] = useState('');
    const [isShow, setIsShow] = useState(false);

    async function SaveMockapi() {
        try {
            let abc = await axios.post("https://67ad86693f5a4e1477ddf074.mockapi.io/User", {
                name: name,
                email: email,
                pswd: pswd,
                Age: age,
                gender: gender
            });
            console.log(`${abc.data}`);
            setMsg("Data Saved Successfully");
            setIsShow(true);

            
            setName('');
            setEmail('');
            setPswd('');
            setAge('');
            setGender('');
        } catch (error) {
            console.log(`${error}`);
        }
    }

    return (
        <div style={styles.container}>
            <h2>Login Form</h2>
            <form onSubmit={(e) => { e.preventDefault(); SaveMockapi(); }} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Password:</label>
                    <input 
                        type="password" 
                        value={pswd} 
                        onChange={(e) => setPswd(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Age:</label>
                    <input 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        required 
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required style={styles.select}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <button type="submit" style={styles.button}>Submit</button>
                <br />
                <Link to="/sd">View Details</Link>
            </form>

            {isShow && <p style={styles.successMessage}>{msg}</p>}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f9',
        fontFamily: 'Arial, sans-serif'
    },
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px'
    },
    label: {
        fontSize: '14px',
        marginBottom: '5px',
    },
    input: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        fontSize: '14px'
    },
    select: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        fontSize: '14px'
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    successMessage: {
        color: 'green',
        fontSize: '16px',
        marginTop: '20px',
    }
};
