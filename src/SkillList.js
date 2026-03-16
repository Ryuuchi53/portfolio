import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // your Firebase config
import { ref, get } from "firebase/database";

function SkillsList() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const snapshot = await get(ref(db, "projects/skills")); // adjust the path
        if (snapshot.exists()) {
          // Convert Firebase object to array
          const data = Object.entries(snapshot.val()).map(([id, value]) => ({
            id,
            name: value.name,
            list: value.list,
          }));
          setSkills(data);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div className="App">
      <ul className="list">
        {skills.map(item => (
          <li key={item.id} className="list-item">
            <span className="item-name">{item.name}</span>
            <br /><br />
            <span className="item-list">{item.list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;