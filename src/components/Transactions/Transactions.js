import React, { useEffect, useState } from 'react';
import { Page, PageContent } from '../common/Elements';
import Header from '../common/Header';
import { withRouter } from 'react-router-dom';
import { getTransactions } from '../../services/accountsService';
import SimpleTable from '../common/SimpleTable';

const headerConfig = [
  {
    name: 'from',
    label: 'From',
  },
  {
    name: 'transaction_date',
    label: 'Transaction Date',
    type: 'DATE',
  },
  {
    name: 'amount',
    label: 'Amount',
  },
];

const Transactions = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      if (match?.params?.id) {
        const transactions = await getTransactions(match?.params?.id);
        setData(transactions);
      }
    })();
  }, []);

  const clickHandler = (id) => {
    console.log('id', id);
  };

  return (
    <Page>
      <Header
        heading="Transactions"
        data={data}
        backLink="/"
        description={match?.params?.account}
      />
      <PageContent>
        {data && (
          <SimpleTable
            headers={headerConfig}
            data={data}
            idField="id"
            onClick={clickHandler}
          />
        )}
      </PageContent>
    </Page>
  );
};

export default withRouter(Transactions);
