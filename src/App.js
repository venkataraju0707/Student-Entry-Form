import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    if (!name || !age || !grade) return;

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
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* TITLE + SUBTITLE */}
        <h1 style={styles.title}>Student Entry Form</h1>
        <p style={styles.subtitle}>Add students and review the list below.</p>

        {/* FORM */}
        <div style={styles.formRow}>
          <div style={styles.inputGroup}>
            <label>Name</label>
            <input
              name="name"
              style={styles.input}
              placeholder="e.g. MS Dhoni"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label>Age</label>
            <input
              name="age"
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
              name="grade"
              style={styles.select}
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="">Select grade</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        {/* BUTTONS */}
        <div style={styles.buttonRow}>
          <button style={styles.addBtn} onClick={addStudent}>
            Add Student
          </button>
          <button style={styles.clearBtn} onClick={clearForm}>
            Clear
          </button>
        </div>

        {/* TABLE / EMPTY STATE */}
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
                  <th style={styles.th}>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((s, i) => (
                  <tr key={i}>
                    <td style={styles.td}>{s.name}</td>
                    <td style={styles.td}>{s.age}</td>

                    {/* Important: Must be shown as "Class X" */}
                    <td style={styles.td}>Class {s.grade}</td>

                    <td style={styles.td}>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removeStudent(i)}
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

/* ================= CSS ================= */

const styles = {
  page: {
    background: "#f3f4f6",
    minHeight: "100vh",
    paddingTop: "40px",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    width: "80%",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 16px rgba(0,0,0,0.1)",
  },

  title: { textAlign: "center", fontSize: "30px", fontWeight: "700" },
  subtitle: { textAlign: "center", marginBottom: "20px", color: "#555" },

  formRow: { display: "flex", gap: "20px" },

  inputGroup: { flex: 1, display: "flex", flexDirection: "column" },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "6px",
  },

  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "6px",
  },

  buttonRow: { marginTop: "20px", display: "flex", gap: "10px" },

  addBtn: {
    background: "#2563eb",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },

  clearBtn: {
    background: "#e5e7eb",
    padding: "10px 18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  tableContainer: { marginTop: "25px" },

  table: { width: "100%", borderCollapse: "collapse" },

  th: { padding: "10px", background: "#f1f5f9", borderBottom: "2px solid #ccc" },
  td: { padding: "10px", borderBottom: "1px solid #eee" },

  removeBtn: {
    background: "#fde2e2",
    color: "#b91c1c",
    padding: "6px 14px",
    border: "1px solid #fca5a5",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "700",
  },

  noData: { textAlign: "center", color: "#777", padding: "15px" },
};

export default App;
