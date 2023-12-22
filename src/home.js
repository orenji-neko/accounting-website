import { Table } from "react-bootstrap";
import Profile from "./profile";

import doctorImage from './doctor.png'

const Home = () => {
  const imagestyle = {
    backgroundSize: "cover",
    width: '520px',
    height: '540px'
  };

  return (
    <>
      <table style={{width: '100%'}}>
        <tr>
          <td>
            <img src={doctorImage} style={imagestyle}/>
          </td>
          <td>
            <div style={{paddingLeft: '5%', marginTop: 100}}>
              <div style={{textAlign: 'right', color: 'white'}}>
                <h1 style={{fontSize: 35}}><b>MEDICAL<br/>CENTER</b></h1>
                <p style={{fontSize: 19}}>Trust our medical experience to <br/>keep you in the best of shape.</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </>
  )
}

export default Home;