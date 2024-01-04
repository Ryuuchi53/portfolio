import React from 'react';

const data = [
    {
      Date: '8 september 2023',
      'Name': '5G Pioneers Program',
      Link: 'https://www.credly.com/badges/e807d495-2a73-4804-b307-341766e5e04e/public_url'
    },
    {
      Date: '1 december 2023',
      'Name': 'Software Engineering MicroDegree',
      Link: 'https://digitalbadge.dreamcatcher.asia/b/vuiIVx2CoE'
    },
];

const Table = () => {
  return (
    <div className='table-container' id='third'>
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
            {Object.entries(row).map(([key, value], i) => (
              <td key={i}>
                {key === 'Link' ? <a href={value} target="_blank" rel="noopener noreferrer">{value}</a> : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
