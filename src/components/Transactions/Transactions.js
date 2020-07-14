import React, { useEffect, useState } from 'react';
import { Page, PageContent, SubTitle } from '../common/Elements';
import Header from '../common/Header';
import { withRouter } from 'react-router-dom';
import { getTransactions } from '../../services/accountsService';
import SimpleTable from '../common/SimpleTable';
import ContentLoader from '../common/ContentLoader';
import TransactionDetails from './TransactionDetails';

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
  const [currentTransaction, setCurrentTransaction] = useState(null);

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
  }, [match]);

  const clickHandler = (id) => {
    // Find transactiond details from transaction id
    const tranDetails = data.find((rec) => rec.id === id);
    if (tranDetails) {
      setCurrentTransaction(tranDetails);
    }
  };

  const modalCloseHandler = () => {
    setCurrentTransaction(false);
  };

  return (
    <Page>
      <Header
        heading="Transactions"
        backLink="/"
        description={match?.params?.account}
      />
      <PageContent>
        {data ? (
          <>
            <SimpleTable
              headers={headerConfig}
              data={data}
              idField="id"
              onClick={clickHandler}
            />
            <SubTitle>Click on a record to see transactions details</SubTitle>
          </>
        ) : (
          <ContentLoader rows={10} cols={3} />
        )}
      </PageContent>
      {currentTransaction && (
        <TransactionDetails
          onClose={modalCloseHandler}
          data={currentTransaction}
        />
      )}
    </Page>
  );
};

export default withRouter(Transactions);
