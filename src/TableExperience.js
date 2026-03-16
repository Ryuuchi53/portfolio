import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

function ExperiencesTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const columnOrder = ["date", "position", "company", "description"];

  useEffect(() => {
    const experiencesRef = ref(db, "projects/experiences");

    // Subscribe to real-time updates
    const unsubscribe = onValue(experiencesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          date: value.date,
          position: value.position,
          company: value.company,
          description: value.description,
        }));
        setProjects(data);
      } else {
        setProjects([]);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div className="table-container">
      <table className="complex-table">
        <thead>
          <tr>
            {columnOrder.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {projects.map((row) => (
            <tr key={row.id}>
              {columnOrder.map((key, i) => (
                <td key={i} data-column={key}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExperiencesTable;