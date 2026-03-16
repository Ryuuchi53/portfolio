import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

function CertificationsTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const columnOrder = ["date", "name", "link"];

  useEffect(() => {
    const certificationsRef = ref(db, "projects/certifications");

    // Subscribe to real-time updates
    const unsubscribe = onValue(certificationsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          date: value.date,
          name: value.name,
          link: value.link,
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
                <td key={i} data-column={key}>
                  {key === "link" && row[key] ? (
                    <a href={row[key]} target="_blank" rel="noopener noreferrer">
                      {row[key]}
                    </a>
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CertificationsTable;