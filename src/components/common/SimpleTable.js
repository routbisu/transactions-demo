import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ headers }) =>
  headers && (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.name}>{header.label}</th>
        ))}
      </tr>
    </thead>
  );

const SimpleTable = ({ data, headers }) => {
  return (
    <table>
      {headers && <TableHeader headers={headers} />}
      <tbody>
        {data &&
          data.map((record, i) => (
            <tr key={i}>
              {headers
                ? headers.map((header, j) => (
                    <td key={j}>{record[header['name']]}</td>
                  ))
                : Object.values(record).map((value, j) => (
                    <td key={j}>{value}</td>
                  ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

SimpleTable.propTypes = {
  header: PropTypes.any,
  data: PropTypes.array.isRequired,
};

export default SimpleTable;
