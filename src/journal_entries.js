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
const AdjustingEntries = [];

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

// Oct 18
JournalEntries.push(
  entry(
    {
      date: 'Oct 18',
      account: 'Accounts Receivable',
      folio: '120',
      debit: '317,000'
    }),
  entry({
      account: 'Medical Revenues',
      folio: '410',
      credit: '317,000',
      indent: true
    })
);

// Oct 21
JournalEntries.push(
  entry(
    {
      date: 'Oct 21',
      account: 'Repairs Expense',
      folio: '530',
      debit: '23,000'
    }),
  entry({
      account: 'Cash',
      folio: '110',
      credit: '23,000',
      indent: true
    })
);

// Oct 23
JournalEntries.push(
  entry(
    {
      date: 'Oct 23',
      account: 'Telephone Expense',
      folio: '560',
      debit: '3,000'
    }),
  entry({
      account: 'Cash',
      folio: '110',
      credit: '3,000',
      indent: true
    })
);

// Oct 24
JournalEntries.push(
  entry(
    {
      date: 'Oct 24',
      account: 'Medical Equipment',
      folio: '170',
      debit: '45,000'
    }),
  entry({
      account: 'Accounts Payable',
      folio: '230',
      credit: '45,000',
      indent: true
    })
);

// Oct 25
JournalEntries.push(
  entry(
    {
      date: 'Oct 25',
      account: 'Cash',
      folio: '110',
      debit: '113,000'
    }),
  entry({
      account: 'Accounts Receivable',
      folio: '120',
      credit: '113,000',
      indent: true
    })
);

// Oct 27
JournalEntries.push(
  entry(
    {
      date: 'Oct 27',
      account: 'Accounts Payable',
      folio: '230',
      debit: '13,000'
    }),
  entry({
      account: 'Cash',
      folio: '110',
      credit: '13,000',
      indent: true
    })
);

// Oct 30-1
JournalEntries.push(
  entry(
    {
      date: 'Oct 30',
      account: 'Marasigan, Withdrawals',
      folio: '320',
      debit: '200,000'
    }),
  entry({
      account: 'Cash',
      folio: '110',
      credit: '200,000',
      indent: true
    })
);

// Oct 30-2
JournalEntries.push(
  entry(
    {
      date: 'Oct 30',
      account: 'Association Dues Expense',
      folio: '550',
      debit: '15,000'
    }),
  entry({
      account: 'Cash',
      folio: '110',
      credit: '15,000',
      indent: true
    })
);
// Totals
JournalEntries.push(
  entry(
    {
      account: 'Total',
      debit: 3005000,
      credit: 3005000
    }),
);

// Oct. 31-1
AdjustingEntries.push(
  entry(
    {
      date: 'Oct 31',
      account: 'Insurance Expense',
      folio: 520,
      debit: 1666.67
    }),
  entry({
      account: 'Prepaid Insurance',
      folio: 140,
      credit: 1666.67,
      indent: true
    })
);
// Oct. 31-2
AdjustingEntries.push(
  entry(
    {
      date: 'Oct 31',
      account: 'Supplies Expense',
      folio: 540,
      debit: 35000
    }),
  entry({
      account: 'Medical Supplies',
      folio: 130,
      credit: 35000,
      indent: true
    })
);
// Oct. 31-3
AdjustingEntries.push(
  entry(
    {
      date: 'Oct 31',
      account: 'Depreciation Expense - Building',
      folio: 570,
      debit: 5000
    }),
  entry(
      {
        account: 'Depreciation Expense - Equipment',
        folio: 580,
        debit: 9000
      }),
  entry({
      account: 'Accumulated Depreciation - Building',
      folio: 165,
      credit: 5000,
      indent: true
    }),
    entry({
      account: 'Accumulated Depreciation - Equipment',
      folio: 175,
      credit: 9000,
      indent: true
    }),
);
// Oct. 31-4
AdjustingEntries.push(
  entry(
    {
      date: 'Oct 31',
      account: 'Research Revenues',
      folio: 420,
      debit: 60000
    }),
  entry({
      account: 'Unearned Research Revenues',
      folio: 260,
      credit: 60000,
      indent: true
    })
);
// Oct. 31-5
AdjustingEntries.push(
  entry(
    {
      date: 'Oct 31',
      account: 'Salaries Expense',
      folio: 510,
      debit: 51000
    }),
  entry({
      account: 'Salaries Payable',
      folio: 240,
      credit: 51000,
      indent: true
    })
);
// Oct. 31-5
AdjustingEntries.push(
  entry(
    {
      date: 'Oct 31',
      account: 'Interest Expense',
      folio: 590,
      debit: 28000
    }),
  entry({
      account: 'Interest Payable',
      folio: 250,
      credit: 28000,
      indent: true
    })
);
// Totals
AdjustingEntries.push(
  entry(
    {
      account: 'Total',
      debit: 189666.67,
      credit: 189666.67
    })
);

export {JournalEntries, AdjustingEntries};
