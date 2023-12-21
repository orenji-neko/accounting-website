import { Table } from "react-bootstrap";

let entries = [];
entries.push({
  code1: 110,
  title1: 'Cash',
  code2: 310,
  title2: 'Marasigan, Capital'
});
entries.push({
  code1: 120,
  title1: 'Accounts Receivable',
  code2: 320,
  title2: 'Marasigan, Withdrawals'
});
entries.push({
  code1: 130,
  title1: 'Medical Supplies',
  code2: 330,
  title2: 'Income Summary'
});
entries.push({
  code1: 140,
  title1: 'Prepaid Insurance',
  code2: 410,
  title2: 'Medical Revenues'
});
entries.push({
  code1: 150,
  title1: 'Accounts Receivable',
  code2: 420,
  title2: 'Research Revenues'
});
entries.push({
  code1: 160,
  title1: 'Medical Building',
  code2: 510,
  title2: 'Salaries Expense'
});
entries.push({
  code1: 165,
  title1: 'Accumulated Depreciation - Building',
  code2: 520,
  title2: 'Insurance Expense'
});
entries.push({
  code1: 170,
  title1: 'Medical Equipment',
  code2: 530,
  title2: 'Repairs Expense'
});
entries.push({
  code1: 175,
  title1: 'Accumulated Depreciation - Equipment',
  code2: 540,
  title2: 'Supplies Expense'
});
entries.push({
  code1: 210,
  title1: '24% Notes Payable',
  code2: 550,
  title2: 'Association Dues Expense'
});
entries.push({
  code1: 220,
  title1: '20% Notes Payable',
  code2: 560,
  title2: 'Telephone Expense'
});
entries.push({
  code1: 230,
  title1: 'Accounts Payable',
  code2: 570,
  title2: 'Depreciation Expense - Building'
});
entries.push({
  code1: 240,
  title1: 'Salaries Payable',
  code2: 580,
  title2: 'Depreciation Expense - Equipment'
});
entries.push({
  code1: 250,
  title1: 'Interest Payable',
  code2: 590,
  title2: 'Interest Expense'
});
entries.push({
  code1: 260,
  title1: 'Unearned Research Revenues',
  code2: '',
  title2: ''
});

const Chart = () => {
  return(
    <>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <td colSpan={6} style={{textAlign: 'center'}}>
              <h4>Dr. Nick Marasigan, MD</h4>
              <h4>Chart of Accounts</h4>
            </td>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
              <>
                <tr key={index}>
                  <td colSpan={2}>{entry.title1}</td>
                  <td>{entry.code1}</td>
                  <td colSpan={2}>{entry.title2}</td>
                  <td>{entry.code2}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default Chart;