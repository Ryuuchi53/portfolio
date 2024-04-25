import React from 'react';

const data = [
    {
      Date: '09/2021-01/2022',
      Company: 'Aq Wise Sdn Bhd',
      Position: 'Intership - mobile App Developer',
      Description: 'Involve in Dr Solehah book Revolusi Bahasa & Asas Tamadun - Multimedia App Project'
    },
    {
      Date: '03/01/2024-now',
      Company: 'ICU Jabatan Perdana Menteri',
      Position: 'MYStep F41',
      Description: 'Involve in MYProjek'
    },
  ];
  

const Table = () => {
  return (
    <div className='table-container' id='fourth'>
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
