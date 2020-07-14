import React, { useEffect, useState } from 'react';
import { Page, PageContent } from '../common/Elements';
import Header from '../common/Header';
import { withRouter } from 'react-router-dom';
import { getTransactions } from '../../services/accountsService';
import SimpleTable from '../common/SimpleTable';
import ContentLoader from '../common/ContentLoader';

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
        // To emulate a network call (added a delay of 1.1s)
        setTimeout(async () => {
          const transactions = await getTransactions(match?.params?.id);
          setData(transactions);
        }, 1100);
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
        {data ? (
          <SimpleTable
            headers={headerConfig}
            data={data}
            idField="id"
            onClick={clickHandler}
          />
        ) : (
          <ContentLoader rows={10} cols={3} />
        )}
      </PageContent>
    </Page>
  );
};

export default withRouter(Transactions);
