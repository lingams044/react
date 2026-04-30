import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// --- Styled Components (Internal CSS) ---
const styles = {
  nav: { padding: '20px', background: '#282c34', color: 'white', display: 'flex', gap: '15px' },
  link: { color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' },
  container: { padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial' },
  formGroup: { marginBottom: '15px', display: 'flex', flexDirection: 'column' },
  label: { fontWeight: 'bold', marginBottom: '5px' }
};

// --- Home Page Component ---
const Home = () => (
  <div style={styles.container}>
    <h1>Welcome to City College Admission Portal</h1>
    <p>Your journey towards a bright future starts here. Please use the navigation menu to register.</p>
  </div>
);

// --- About Page Component ---
const About = () => (
  <div style={styles.container}>
    <h1>About Our College</h1>
    <p>City College has been a leader in education for 50 years, specializing in Technology, Arts, and Sciences.</p>
    <ul>
      <li><strong>Location:</strong> 123 Education Lane, Metro City</li>
      <li><strong>Accreditation:</strong> Grade A+ University</li>
    </ul>
  </div>
);

// --- Success Page Component ---
const Success = () => (
  <div style={styles.container}>
    <h1 style={{ color: 'green' }}>Registration Successful!</h1>
    <p>Thank you for applying. Our team will contact you shortly.</p>
    <Link to="/" style={styles.link}>Return Home</Link>
  </div>
);

// --- Registration Page Component (The Form) ---
const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', age: '', course: 'Computer Science',
    gender: '', skills: [], address: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newSkills = checked 
        ? [...formData.skills, value] 
        : formData.skills.filter(s => s !== value);
      setFormData({ ...formData, skills: newSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    navigate('/success'); // Redirect to success page
  };

  return (
    <div style={styles.container}>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Student Name:</label>
          <input type="text" name="name" required onChange={handleChange} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Age:</label>
          <input type="number" name="age" required onChange={handleChange} />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Course:</label>
          <select name="course" onChange={handleChange}>
            <option>Computer Science</option>
            <option>Business Administration</option>
            <option>Mechanical Engineering</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Gender:</label>
          <div>
            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            <input type="radio" name="gender" value="Female" onChange={handleChange} style={{marginLeft: '10px'}} /> Female
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Skills:</label>
          <div>
            <input type="checkbox" value="React" onChange={handleChange} /> React
            <input type="checkbox" value="Python" onChange={handleChange} style={{marginLeft: '10px'}} /> Python
            <input type="checkbox" value="Design" onChange={handleChange} style={{marginLeft: '10px'}} /> Design
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Address:</label>
          <textarea name="address" rows="4" onChange={handleChange}></textarea>
        </div>

        <button type="submit" style={{padding: '10px 20px', cursor: 'pointer'}}>Submit Application</button>
      </form>
    </div>
  );
};

// --- Main App Component (Routing) ---
export default function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
