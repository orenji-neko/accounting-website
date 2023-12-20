const entry = ({date = '', account = '', folio = '', debit = '', credit = '', indent = false}) => {
  return {
    date: date,
    account: account,
    folio: folio,
    debit: debit,
    credit: credit,
    indent: indent
  }
}

const JournalEntries = [];

// Oct 1-1
JournalEntries.push(
  entry(
    {
      date: 'Oct 1',
      account: 'Cash',
      folio: '110',
      debit: '250,000'
    }),
  entry({
      account: 'Marasigan, Capital',
      folio: '310',
      credit: '250,000',
      indent: true
    }),
);

// Oct 1-2
JournalEntries.push(
  entry(
    {
      date: 'Oct 1',
      account: 'Land',
      folio: '150',
      debit: '250,000'
    }),
  entry(
    {
      account: 'Medical Building',
      folio: '160',
      debit: '1,000,000'
    }),
  entry(
    {
      account: 'Cash',
      folio: '110',
      credit: '50,000',
      indent: true
    }),
  entry(
    {
      account: '20% Notes Payable',
      folio: '220',
      credit: '1,200,000',
      indent: true
    })
);

// Oct 1-3
JournalEntries.push(
  entry(
    {
      date: 'Oct 1',
      account: 'Medical Equipment',
      folio: '170',
      debit: '420,000'
    }),
  entry(
    {
      account: 'Medical Supplies',
      folio: '130',
      debit: '39,000'
    }),
  entry(
    {
      account: 'Cash',
      folio: '110',
      credit: '59,000',
      indent: true
    }),
  entry(
    {
      account: '24% Notes Payable',
      folio: '210',
      credit: '400,000',
      indent: true
    })
);

// Oct 2
JournalEntries.push(
  entry(
    {
      date: 'Oct 2',
      account: 'Prepaid Insurance',
      folio: '140',
      debit: '20,000'
    }),
  entry({
      account: 'Cash',
      folio: '110',
      credit: '20,000',
      indent: true
    })
);

// Oct 4
JournalEntries.push(
  entry(
    {
      date: 'Oct 4',
      account: 'Cash',
      folio: '110',
      debit: '117,000'
    }),
  entry({
      account: 'Medical Revenues',
      folio: '410',
      credit: '117,000',
      indent: true
    })
);

// Oct 7
JournalEntries.push(
  entry(
    {
      date: 'Oct 7',
      account: 'Medical Supplies',
      folio: '130',
      debit: '17,000'
    }),
  entry({
      account: 'Accounts Payable',
      folio: '230',
      credit: '17,000',
      indent: true
    })
);

// Oct 10
JournalEntries.push(
  entry(
    {
      date: 'Oct 10',
      account: 'Salaries Expense',
      folio: '510',
      debit: '73,000'
    }),
  entry({
      account: 'Cash',
      folio: '110',
      credit: '73,000',
      indent: true
    })
);

// Oct 12
JournalEntries.push(
  entry(
    {
      date: 'Oct 12',
      account: 'Cash',
      folio: '110',
      debit: '90,000'
    }),
  entry({
      account: 'Research Revenues',
      folio: '420',
      credit: '90,000',
      indent: true
    })
);

export default JournalEntries;