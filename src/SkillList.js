import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // your Firebase config
import { ref, onValue } from "firebase/database";

function SkillsList() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const skillsRef = ref(db, "projects/skills");

    // Subscribe to real-time updates
    const unsubscribe = onValue(skillsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = Object.entries(snapshot.val()).map(([id, value]) => ({
          id,
          name: value.name,
          list: value.list,
        }));
        setSkills(data);
      } else {
        setSkills([]);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
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