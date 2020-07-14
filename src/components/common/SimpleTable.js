import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

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

const Table = styled.table`
  color: ${(props) => props.theme.colors.secondary};

  tbody {
    tr {
      background: ${(props) => props.theme.colors.bgGrey};
      transition: 0.3s ease-in-out;
      &:nth-child(even) {
        background: ${(props) => props.theme.colors.bgGreyLight};
      }
      &:hover {
        background: ${(props) => props.theme.colors.bgGreyHover};
        transition: 0.3s ease-in-out;
      }
    }
  }

  th {
    text-align: left;
    padding: 12px 18px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.white};
  }

  td {
    padding: 20px;
    padding: 12px 18px;
    border: 1px solid ${(props) => props.theme.colors.white};
    &:not(:first-child) {
      text-align: right;
    }
  }
`;

const SimpleTable = ({
  data,
  headers,
  idField,
  onClick,
  detailsDescription,
}) => {
  const clickHandler = (record) => {
    let additionalDetails;

    if (detailsDescription) {
      additionalDetails = detailsDescription(record);
    }

    if (onClick) {
      onClick(record.id, additionalDetails);
    }
  };

  return (
    <Table>
      {headers && <TableHeader headers={headers} />}
      <tbody>
        {data &&
          data.map((record, i) => (
            <tr
              key={idField ? record[idField] : i}
              onClick={() => clickHandler(record)}
              style={{ cursor: idField ? 'pointer' : 'inherit' }}
            >
              {headers
                ? headers.map((header, j) => (
                    <td key={j}>
                      {header.type === 'DATE'
                        ? moment(
                            record[header['name']],
                            'YYYY-MM-DDThh:mm:ss'
                          ).format('DD MMM YYYY, hh:mm A')
                        : record[header['name']]}
                    </td>
                  ))
                : Object.values(record).map((value, j) => (
                    <td key={j}>{value}</td>
                  ))}
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

SimpleTable.propTypes = {
  header: PropTypes.any,
  data: PropTypes.array.isRequired,
  idField: PropTypes.string,
  detailsDescription: PropTypes.func,
  onClick: PropTypes.func,
};

export default SimpleTable;
