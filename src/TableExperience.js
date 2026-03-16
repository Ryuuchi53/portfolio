import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, get } from "firebase/database";

function ExperiencesTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const columnOrder = ["date", "position", "company", "description"];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await get(ref(db, "projects/experiences"));
        console.log(snapshot.val());

        if (snapshot.exists()) {
          const data = Object.entries(snapshot.val()).map(([id, value]) => ({
            id,
            date: value.date,
            position: value.position,
            company: value.company,
            description: value.description,
          }));

          setProjects(data);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchProjects();
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
