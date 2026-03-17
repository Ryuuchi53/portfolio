import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

function ReferencesTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const referencesRef = ref(db, "projects/references");

    const unsubscribe = onValue(referencesRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          name: value.name,
          position: value.position,
          company: value.company,
          address: value.address,
          email: value.email,
          office_number: value.office_number,
        }));
        setProjects(data);
      } else {
        setProjects([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div className="table-container">
      <table className="complex-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((row) => (
            <tr key={row.id}>
              <td>
                {row.name} <br /><br />
                {row.position} <br />
                {row.company} <br />
                {row.address}
              </td>
              <td>
                {row.email} <br />
                {row.office_number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReferencesTable;