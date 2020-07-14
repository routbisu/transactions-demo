import React from 'react';
import { shallow } from 'enzyme';
import { TransactionDetails } from './TransactionDetails';

const tranDataApproved = {
  id: 1,
  account_id: 1,
  description:
    'Dolore quis ad et mollit nisi excepteur ex anim fugiat quis ipsum exercitation proident cupidatat. Quis anim incididunt excepteur cupidatat aliquip nulla reprehenderit velit. Dolor pariatur velit consectetur dolore aliquip reprehenderit non aliqua consectetur. Sunt aliquip consequat et in eu aute.\r\n',
  from: 'Savings Account - 342423455344',
  transaction_date: '2019-06-08T03:37:28 -08:00',
  transaction_processed: true,
  amount: '$1,373.41',
};

const tranDataRejected = {
  id: 1,
  account_id: 1,
  description:
    'Dolore quis ad et mollit nisi excepteur ex anim fugiat quis ipsum exercitation proident cupidatat. Quis anim incididunt excepteur cupidatat aliquip nulla reprehenderit velit. Dolor pariatur velit consectetur dolore aliquip reprehenderit non aliqua consectetur. Sunt aliquip consequat et in eu aute.\r\n',
  from: 'Savings Account - 342423455344',
  transaction_date: '2019-06-08T03:37:28 -08:00',
  transaction_processed: false,
  amount: '$1,373.41',
};

describe('TransactionDetails', () => {
  it('render correctly with transaction approved', () => {
    const component = shallow(<TransactionDetails data={tranDataApproved} />);
    expect(component).toMatchSnapshot();
  });

  it('render correctly with transaction rejected', () => {
    const component = shallow(<TransactionDetails data={tranDataRejected} />);
    expect(component).toMatchSnapshot();
  });
});
