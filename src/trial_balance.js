import { Table } from "react-bootstrap";

const Entry = ({account = '', debit = '', credit = ''}) => {
  return {
    account,
    debit,
    credit
  }
}

let entries = Array();
entries.push({account: 'Cash', debit: 114000});
entries.push({account: 'Accounts Receivable', debit: 204000});
entries.push({account: 'Medical Supplies', debit: 56000});
entries.push({account: 'Prepaid Insurance', debit: 20000});
entries.push({account: 'Land', debit: 250000});
entries.push({account: 'Medical Building', debit: 1000000});
entries.push({account: 'Accumulated Depreciation - Building'});
entries.push({account: 'Medical Equipment', debit: 465000});
entries.push({account: 'Accumulated Depreciation - Equipment'});

entries.push({account: '24% Notes Payable', credit: 400000})
entries.push({account: '20% Notes Payable', credit: 1200000})
entries.push({account: 'Accounts Payable', credit: 49000})
entries.push({account: 'Salaries Payable'})
entries.push({account: 'Interest Payable'})
entries.push({account: 'Unearned Research Revenues'})

entries.push({account: 'Marasigan, Capital', credit: 250000})
entries.push({account: 'Marasigan, Withdrawals', credit: 200000})
entries.push({account: 'Income Summary'})

entries.push({account: 'Medical Revenues', credit: 434000})
entries.push({account: 'Research Revenues', credit: 90000})

entries.push({account: 'Salaries Expense', debit: 73000})
entries.push({account: 'Insurance Expense'})
entries.push({account: 'Repairs Expense', debit: 23000})
entries.push({account: 'Supplies Expense'})
entries.push({account: 'Association Dues Expense', debit: 15000})
entries.push({account: 'Telephone Expense', debit: 3000})
entries.push({account: 'Depreciation Expense - Building'})
entries.push({account: 'Depreciation Expense - Equipment'})
entries.push({account: 'Interest Expense'})
entries.push({account: 'Total', debit: 2423000, credit: 2423000})

const TrialBalance = () => {
  return (
    <>
      <div style={{textAlign: "center"}}>
        <h2>Trial Balance</h2>
        <h4>For the month ended October 31. 2022</h4>
      </div>
      <Table border={2}>
        <thead>
          <tr>
            <th colSpan={2}>Particulars</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
              <>
                <tr key={index}>
                  <td colSpan={2}>{entry.account}</td>
                  <td>{entry.debit}</td>
                  <td>{entry.credit}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default TrialBalance;