import React, { useEffect, useState } from 'react';
import { Page, PageContent } from '../common/Elements';
import Header from '../common/Header';
import SimpleTable from '../common/SimpleTable';
import { getAllAccounts } from '../../services/accountsService';
import { withRouter } from 'react-router-dom';
import { maskString } from '../../services/utils';

const headerConfig = [
  {
    name: 'account_name',
    label: 'Type',
  },
  {
    name: 'account_number',
    label: 'Account Number',
  },
  {
    name: 'currency',
    label: 'Currency',
  },
  {
    name: 'balance',
    label: 'Balance',
  },
];

const Accounts = ({ history }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const accounts = getAllAccounts();
    setData(accounts);
  }, []);

  const clickHandler = (id, account) => {
    console.log('account', account);
    history.push(`/transactions/${id}/${account}`);
  };

  return (
    <Page>
      <Header
        heading="Accounts Summary"
        description="Summary of all accounts"
      />
      <PageContent>
        {data && (
          <SimpleTable
            data={data}
            idField="id"
            onClick={clickHandler}
            headers={headerConfig}
            detailsDescription={(rec) =>
              `${rec.account_name} - ${maskString(rec.account_number)}`
            }
          />
        )}
      </PageContent>
    </Page>
  );
};

export default withRouter(Accounts);
