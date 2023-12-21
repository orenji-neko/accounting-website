import { Table } from "react-bootstrap";

const Given = () => {
  return (
    <>
      <h2 style={{textAlign: 'center'}}>Given</h2>
      <div>
        <h4>Problem #8</h4>
        <p>
          Dr. Nick Marasigan, upon completing a residency program at Harvard Medical Center, established
          a medical practice in San Pablo, Laguna. During October 22, the first month of operations, the following transactions
          occured:
        </p>
        <Table>
          <tbody>
            <tr>
              <td>Oct. 1</td>
              <td>Dr. Marasigan transferred 250,000 from his personal checking account to a bank account, Dr. Nick Marasigan, M.D</td>
            </tr>
            <tr>
              <td></td>
              <td>A medical clinic, P1,000,000 and land, P250,000 were acquired by paying P50,000 in cash and issuing a 5-year,
                20% notes payable (interest is payable every 6 months) for the P1,200,000 balance.
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Acquired medical equipment costing P420,000 and medical supplies amounting to P39,000 by paying P59,000 cash and
                issuing a 24% note payable, maturing in 6 months, for the P400,000 balance.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Given;