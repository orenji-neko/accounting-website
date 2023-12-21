import { Tab, Table } from "react-bootstrap";

const Entry = ({account, values}) => {
  return {
    account, values
  }
}

let entries = [];
// Cash
entries.push({
  account: 'Cash',
  values: [
    114000, '',
    '', '',
    114000, '',
    '', '',
    114000, ''
  ]
});
// Accounts Receivable
entries.push({
  account: 'Accounts Receivable',
  values: [
    204000, '',
    '', '',
    204000, '',
    '', '',
    204000, ''
  ]
});
// Medical Supplies
entries.push({
  account: 'Medical Supplies',
  values: [
    56000, '',
    '', 35000,
    21000, '',
    '', '',
    21000, ''
  ]
});
// Prepaid Insurance
entries.push({
  account: 'Prepaid Insurance',
  values: [
    20000, '',
    '', 1666.67,
    18333, '',
    '', '',
    18333, ''
  ]
});
// Land
entries.push({
  account: 'Land',
  values: [
    250000, '',
    '', '',
    250000, '',
    '', '',
    250000, ''
  ]
});
// Medical Building
entries.push({
  account: 'Medical Building',
  values: [
    1000000, '',
    '', '',
    1000000, '',
    '', '',
    1000000, ''
  ]
});
// Accumulated Depreciation - Building
entries.push({
  account: 'Accumulated Depreciation - Building',
  values: [
    '', '',
    '', 5000,
    '', 5000,
    '', '',
    '', 5000
  ]
});
// Medical Equipment
entries.push({
  account: 'Medical Equipment',
  values: [
    465000, '',
    '', '',
    465000, '',
    '', '',
    465000, ''
  ]
});
// Accumulated Depreciation - Equipment
entries.push({
  account: 'Accumulated Depreciation - Equipment',
  values: [
    '', '',
    '', 9000,
    '', 9000,
    '', '',
    '', 9000
  ]
});
// 24% Notes Payable
entries.push({
  account: '24% Notes Payable',
  values: [
    '', 400000,
    '', '',
    '', 400000,
    '', '',
    '', 400000
  ]
});
// 20% Notes Payable
entries.push({
  account: '20% Notes Payable',
  values: [
    '', 1200000,
    '', '',
    '', 1200000,
    '', '',
    '', 1200000
  ]
});
// Accounts Payable
entries.push({
  account: 'Accounts Payable',
  values: [
    '', 49000,
    '', '',
    '', 49000,
    '', '',
    '', 49000
  ]
});
// Salaries Payable
entries.push({
  account: 'Salaries Payable',
  values: [
    '', '',
    '', 51000,
    '', 51000,
    '', '',
    '', 51000
  ]
});
// Interest Payable
entries.push({
  account: 'Interest Payable',
  values: [
    '', '',
    '', 28000,
    '', 28000,
    '', '',
    '', 28000
  ]
});
// Unearned Research Revenues
entries.push({
  account: 'Unearned Research Revenues',
  values: [
    '', '',
    '', 60000,
    '', 60000,
    '', '',
    '', 60000
  ]
});
// Marasigan, Capital
entries.push({
  account: 'Marasigan, Capital',
  values: [
    '', 250000,
    '', '',
    '', 250000,
    '', '',
    '', 250000
  ]
});
// Marasigan, Withdrawals
entries.push({
  account: 'Marasigan, Withdrawals',
  values: [
    200000, '',
    '', '',
    200000, '',
    '', '',
    200000, ''
  ]
});
// Income Summary
entries.push({
  account: 'Income Summary',
  values: [
    '', '',
    '', '',
    '', '',
    '', '',
    '', ''
  ]
});
// Medical Revenues
entries.push({
  account: 'Medical Revenues',
  values: [
    '', 434000,
    '', '',
    '', 434000,
    '', 434000,
    '', ''
  ]
});
// Research Revenues
entries.push({
  account: 'Medical Revenues',
  values: [
    '', 90000,
    60000, '',
    '', 30000,
    '', 30000,
    '', ''
  ]
});
// Salaries Expense
entries.push({
  account: 'Salaries Expense',
  values: [
    73000, '',
    51000, '',
    124000, '',
    124000, '',
    '', ''
  ]
});
// Insurance Expense
entries.push({
  account: 'Insurance Expense',
  values: [
    '', '',
    1666.67, '',
    1666.67, '',
    1666.67, '',
    '', ''
  ]
});
// Repairs Expense
entries.push({
  account: 'Repairs Expense',
  values: [
    23000, '',
    '', '',
    23000, '',
    23000, '',
    '', ''
  ]
});
// Supplies Expense
entries.push({
  account: 'Supplies Expense',
  values: [
    '', '',
    35000, '',
    35000, '',
    35000, '',
    '', ''
  ]
});
// Association Dues Expense
entries.push({
  account: 'Association Dues Expense',
  values: [
    15000, '',
    '', '',
    15000, '',
    15000, '',
    '', ''
  ]
});
// Telephone Expense
entries.push({
  account: 'Association Dues Expense',
  values: [
    3000, '',
    '', '',
    3000, '',
    3000, '',
    '', ''
  ]
});
// Depreciation Expense - Building
entries.push({
  account: 'Depreciation Expense - Building',
  values: [
    '', '',
    5000, '',
    5000, '',
    5000, '',
    '', ''
  ]
});
// Depreciation Expense - Equipment
entries.push({
  account: 'Depreciation Expense - Equipment',
  values: [
    '', '',
    9000, '',
    9000, '',
    9000, '',
    '', ''
  ]
});
// Interest Expense
entries.push({
  account: 'Interest Expense',
  values: [
    '', '',
    28000, '',
    28000, '',
    28000, '',
    '', ''
  ]
});
// totals
entries.push({
  account: 'TOTAL',
  values: [
    2423000, 2423000,
    189666.67, 189666.67,
    2516000, 2516000, 
    243666.67, 464000,
    2272333.33, 2052000.00
  ]
});
entries.push({
  account: 'PROFIT',
  values: [
    '', '',
    '', '',
    '', '',
    220333.33, '',
    '', 220333.33
  ]
});
entries.push({
  account: 'TOTAL',
  values: [
    '', '',
    '', '',
    '', '',
    464000, 464000,
    2272333.33, 2272333.33
  ]
});

const Worksheet = () => {
  return (
    <>
      <div style={{textAlign: "center"}}>
        <h4>Dr. Nick Marasigan</h4>
        <h4>10-Column Worksheet</h4>
        <h4>For the month ended October 31. 2022</h4>
      </div>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <th colSpan={2}>Particulars</th>
            <th colSpan={2}>Unadjusted Trial Balance</th>
            <th colSpan={2}>Adjustments</th>
            <th colSpan={2}>Adjusted Trial Balance</th>
            <th colSpan={2}>Income Statement</th>
            <th colSpan={2}>Balance Sheet</th>
          </tr>
          <tr>
            <th colSpan={2}></th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
              return(
              <>
                <tr key={index}>
                  <td colSpan={2}>{entry.account}</td>
                  {entry.values.map((value, index) => {
                    return (
                      <>
                        <td key={index}>{value}</td>
                      </>
                    )
                  })}
                </tr>
              </>
              )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default Worksheet;