import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import PropTypes from 'prop-types';
import { Table } from '../../components/common/SimpleTable';
import { formatDate } from '../../services/utils';

const TransactionBody = styled.div`
  padding-top: 20px;
  overflow-x: auto;
`;

export const TransactionDetails = ({ onClose, data }) => {
  const {
    from,
    transaction_date,
    transaction_processed,
    amount,
    description,
  } = data;

  return (
    <Modal onClose={onClose}>
      <TransactionBody>
        <Table className="tablet-and-desktop-only">
          <tbody>
            <tr>
              <th>From</th>
              <td>{from}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{formatDate(transaction_date)}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{amount}</td>
            </tr>
            <tr>
              <th>Processed</th>
              <td>{transaction_processed ? '✔️' : '✖️'}</td>
            </tr>
            <tr>
              <td colSpan={2} style={{ whiteSpace: 'normal' }}>
                {description}
              </td>
            </tr>
          </tbody>
        </Table>

        <Table className="mobile-only">
          <tbody>
            <tr>
              <th>From</th>
            </tr>
            <tr>
              <td>{from}</td>
            </tr>
            <tr>
              <th>Date</th>
            </tr>
            <tr>
              <td>{formatDate(transaction_date)}</td>
            </tr>
            <tr>
              <th>Amount</th>
            </tr>
            <tr>
              <td>{amount}</td>
            </tr>
            <tr>
              <th>Processed</th>
            </tr>
            <tr>
              <td>{transaction_processed ? '✔️' : '✖️'}</td>
            </tr>
            <tr>
              <td style={{ whiteSpace: 'normal' }}>{description}</td>
            </tr>
          </tbody>
        </Table>
      </TransactionBody>
    </Modal>
  );
};

TransactionDetails.propTypes = {
  onClose: PropTypes.func,
  data: PropTypes.any,
};

export default TransactionDetails;
