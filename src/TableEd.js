import React from 'react';

const data = [
    {
      Date: '2012-2016',
      'School Name': 'SMK Sungai Besar',
      'Field Of Study': 'SPM - Pure Science'
    },
    {
      Date: '2017-2018',
      'School Name': 'Kolej Matrikulasi Negeri Sembilan',
      'Field Of Study': 'Matriculation Programme - Science PST Module 2'
    },
    {
      Date: '2018-2023',
      'School Name': 'Universiti Kebangsaan Malaysia',
      'Field Of Study': 'Bachelor of Software Engineering With Honours (Information System Development)'
    },
  ];
  

const Table = () => {
  return (
    <div className='table-container'>
      <table className="complex-table">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
