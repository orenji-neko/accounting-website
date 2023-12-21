import { Table } from "react-bootstrap";

const Entry2 = ({particulars = '', amount = '', indent = false}) => {
  return {
    particulars, amount, indent
  }
}

let equityArray = [];
equityArray.push({
  particulars: 'Marasigan, Capital',
  amount: 250000,
});
equityArray.push({
  particulars: 'Add:',
})
equityArray.push({
  particulars: 'Profit',
  amount: 220333,
  indent: true,
})
equityArray.push({
  particulars: 'Total',
  amount: 470333.33
})
equityArray.push({
  particulars: 'Less:',
})
equityArray.push({
  particulars: 'Marasigan, Withdrawals',
  amount: 200000,
  indent: true,
});
equityArray.push({
  particulars: 'Marasigan, Capital',
  amount: 270333.33
})

const Equity = () => {
  return (
    <>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <td colSpan={2}>
              <div style={{textAlign: "center"}}>
                <h2>Statement of Changes in Equity</h2>
                <h4>for the month ended October 31. 2022</h4>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {equityArray.map((entry, index) => {
            return (
              <>
                <tr key={index}>
                  {entry.indent === true ? <td>&nbsp;&nbsp;{entry.particulars}</td> : <td>{entry.particulars}</td>}
                  <td>{entry.amount}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

let incomeArray = [];
incomeArray.push({
  particulars: 'Medical Revenue',
  amount: 434000
})
incomeArray.push({
  particulars: 'Research Revenue',
  amount: 30000
})
incomeArray.push({
  particulars: 'Gross Profit',
  amount: 464000
})
incomeArray.push({
  particulars: '',
  amount: ''
})
incomeArray.push({
  particulars: 'Operating Expenses',
})
incomeArray.push({
  particulars: 'Salaries Expense',
  amount: 124000,
  indent: true
});
incomeArray.push({
  particulars: 'Insurance Expense',
  amount: 1666.67,
  indent: true
});
incomeArray.push({
  particulars: 'Repairs Expense',
  amount: 23000,
  indent: true
});
incomeArray.push({
  particulars: 'Supplies Expense',
  amount: 35000,
  indent: true
});
incomeArray.push({
  particulars: 'Association Dues Expense',
  amount: 15000,
  indent: true
});
incomeArray.push({
  particulars: 'Telephone Expense',
  amount: 3000,
  indent: true
});
incomeArray.push({
  particulars: 'Depreciation Expense - Building.',
  amount: 5000,
  indent: true
});
incomeArray.push({
  particulars: 'Depreciation Expense - Equipment.',
  amount: 9000,
  indent: true
});
incomeArray.push({
  particulars: 'Interest Expense',
  amount: 28000,
  indent: true
});
incomeArray.push({
  particulars: <b>Total Operating Expenses</b>,
  amount: 243666.67,
});
incomeArray.push({
  particulars: '',
  amount: ''
});
incomeArray.push({
  particulars: <b>Profit</b>,
  amount: 220333.33,
});

const Income = () => {
  return (
    <>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <td colSpan={2}>
              <div style={{textAlign: "center"}}>
                <h2>Income Statement</h2>
                <h4>for the month ended October 31. 2022</h4>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {incomeArray.map((entry, index) => {
            return (
              <>
                <tr key={index}>
                  {entry.indent === true ? <td>&nbsp;&nbsp;{entry.particulars}</td> : <td>{entry.particulars}</td>}
                  <td>{entry.amount}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

let balanceArray = [];
balanceArray.push({
  particulars: 'Current Assets',
});
balanceArray.push({
  particulars: 'Cash',
  left: 114000,
  indent: true,
});
balanceArray.push({
  particulars: 'Accounts Receivable',
  left: 204000,
  indent: true,
});
balanceArray.push({
  particulars: 'Medical Supplies',
  left: 21000,
  indent: true,
});
balanceArray.push({
  particulars: 'Prepaid Insurance',
  left: 18333.33,
  right: 357333.33,
  indent: true,
});
balanceArray.push({
  particulars: '',
});
balanceArray.push({
  particulars: 'Non-current Assets',
});
balanceArray.push({
  particulars: 'Land',
  left: 250000,
  indent: true,
});
balanceArray.push({
  particulars: 'Medical Building',
  left: 1000000,
  indent: true,
});
balanceArray.push({
  particulars: 'Medical Equipment',
  left: 465000,
  indent: true,
});
balanceArray.push({
  particulars: 'Accumulated Depreciation - Building',
  left: 5000,
  indent: true,
});
balanceArray.push({
  particulars: 'Accumulated Depreciation - Equipment',
  left: 9000,
  right: 1701000,
  indent: true,
});
balanceArray.push({
  particulars: 'TOTAL ASSETS',
  right: 2058333.33,
  indent: true,
});
balanceArray.push({
  particulars: '',
});
balanceArray.push({
  particulars: 'Current Liabilities',
});
balanceArray.push({
  particulars: 'Accounts Payable',
  left: 49000,
  indent: true,
});
balanceArray.push({
  particulars: 'Salaries Payable',
  left: 51000,
  indent: true,
});
balanceArray.push({
  particulars: 'Interest Payable',
  left: 28000,
  indent: true,
});
balanceArray.push({
  particulars: 'Unearned Research Revenues',
  left: 60000,
  right: 188000,
  indent: true,
});
balanceArray.push({
  particulars: '',
});
balanceArray.push({
  particulars: 'Non-current Liabilities',
});
balanceArray.push({
  particulars: '24% Notes Payable',
  left: 400000,
  indent: true,
});
balanceArray.push({
  particulars: '20% Notes Payable',
  left: 1200000,
  right: 1600000,
  indent: true,
});
balanceArray.push({
  particulars: 'TOTAL LIABILITIES',
  right: 1788000,
  indent: true,
});
balanceArray.push({
  particulars: '',
});
balanceArray.push({
  particulars: 'Equity',
  right: 270333.33,
});
balanceArray.push({
  particulars: '',
});
balanceArray.push({
  particulars: 'TOTAL LIABILITIES & EQUITY',
  right: 2058333.33,
});

const Balance = () => {
  return (
    <>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <td colSpan={3}>
              <div style={{textAlign: "center"}}>
                <h2>Balance Sheet</h2>
                <h4>for the month ended October 31. 2022</h4>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {balanceArray.map((entry, index) => {
            return (
              <>
                <tr key={index}>
                  {entry.indent === true ? <td>&nbsp;&nbsp;{entry.particulars}</td> : <td>{entry.particulars}</td>}
                  <td>{entry.left}</td>
                  <td>{entry.right}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

const FinancialStatements = () => {
  return (
    <>
      <Equity/>
      <Income/>
      <Balance/>
    </>
  )
}

export default FinancialStatements;