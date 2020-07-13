import React, { useEffect, useState } from 'react';
import { Page, PageContent } from '../common/Elements';
import Header from '../common/Header';
import SimpleTable from '../common/SimpleTable';
import { getAllAccounts } from '../../services/accountsService';

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

const Accounts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const accounts = getAllAccounts();
    setData(accounts);
  }, []);

  return (
    <Page>
      <Header heading="All Accounts" description="Summary of all accounts" />
      <PageContent>
        {data && <SimpleTable data={data} headers={headerConfig} />}
      </PageContent>
    </Page>
  );
};

export default Accounts;
