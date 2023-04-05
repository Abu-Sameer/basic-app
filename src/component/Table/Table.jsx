import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Table.css';
// import Paper from '@mui/material/Paper';

function createData(name, TrackingId, Date, Status) {
  return { name, TrackingId, Date, Status };
}

const rows = [
  createData('Lasania Chicken Fri', 18908424, '2 March 2022', 'Approved'),
  createData('Big Baza Bang', 18908424, '2 March 2022', 'Pending'),
  createData('Mouth Freshner', 18908424, '2 March 2022', 'Approved'),
  createData('Cupcake', 18908421, '2 March 2022', 'Delivered'),
];

const makeStyle = (Status) => {
  if (Status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (Status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

export default function BasicTable() {
  return (
    <div className="table">
      <h3>Recent Orders</h3>

      <TableContainer
        // component={Paper}
        style={{
          boxShadow: '0px 13px 20px 0px #80808029',
          background: 'white',
          borderRadius: '7px',
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.TrackingId}</TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.Status)}>
                    {row.Status}
                  </span>
                </TableCell>
                <TableCell className="detail" align="left">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
