import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (!name || !age || !grade) {
      alert("Please fill all fields");
      return;
    }

    setStudents([...students, { name, age, grade }]);

    setName("");
    setAge("");
    setGrade("");
  };

  const clearForm = () => {
    setName("");
    setAge("");
    setGrade("");
  };

   const removeStudent = (index) => {
    const updatedList = students.filter((_, i) => i !== index);
    setStudents(updatedList);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Student Entry Form</h1>
        <p style={styles.subtitle}>Add students and review the list below.</p>

        <div style={styles.formRow}>
          <div style={styles.inputGroup}>
            <label>Name</label>
            <input
              style={styles.input}
              type="text"
              placeholder="e.g. MS Dhoni"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Age</label>
            <input
              style={styles.input}
              type="number"
              placeholder="e.g. 14"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Grade</label>
            <select
              style={styles.select}
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="">Select grade</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
            </select>
          </div>
        </div>

        <div style={styles.buttonRow}>
          <button style={styles.addBtn} onClick={addStudent}>
            Add Student
          </button>
          <button style={styles.clearBtn} onClick={clearForm}>
            Clear
          </button>
        </div>

        <div style={styles.tableContainer}>
          {students.length === 0 ? (
            <p style={styles.noData}>No students added yet.</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Age</th>
                  <th style={styles.th}>Grade</th>
                   
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{student.name}</td>
                    <td style={styles.td}>{student.age}</td>
                    <td style={styles.td}>{student.grade}</td>
                    <td style={styles.td}>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removeStudent(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

 
const styles = {
  page: {
    background: "#f3f4f6",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px",
  },

  container: {
    background: "white",
    width: "70%",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.1)",
  },

  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "700",
  },

  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "25px",
  },

  formRow: {
    display: "flex",
    gap: "20px",
  },

  inputGroup: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },

  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },

  buttonRow: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  },

  addBtn: {
    background: "#2563eb",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  clearBtn: {
    background: "#e5e7eb",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  tableContainer: {
    marginTop: "25px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    padding: "10px",
    background: "#f1f5f9",
    textAlign: "left",
    borderBottom: "2px solid #ccc",
  },

  td: {
    padding: "10px",
    borderBottom: "1px solid #eee",
  },

removeBtn: {
  background: "#fde2e2",   
  color: "#b91c1c",         
  padding: "6px 14px",
  border: "1px solid #fca5a5",  
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "550"
},


  noData: {
    textAlign: "center",
    color: "#888",
  },
};

export default App;
