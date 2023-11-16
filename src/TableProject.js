import React from 'react';

const data = [
    {
      'Name': 'Portfolio Website',
      Link: 'https://github.com/Ryuuchi53/portfolio'
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
