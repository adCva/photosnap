import React from 'react';
import styled from "styled-components";



function Table() {
  return (
    <TableContainer>
        <h3>Compare</h3>

        {/* ===== On mobile works better with div's and not a table ===== */}
        <TableDIV>
            <div className="table-head">
                <h6>The Features</h6>
            </div>
        </TableDIV>



        <table>
            <thead>
                <tr>
                    <th>The Features</th>
                    <th>basic</th>
                    <th>pro</th>
                    <th>business</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Unlimited Story Posting</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Unlimited Photo Upload</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Embedding Custom Content</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Customize Metadata</td>
                    <td>No</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Advanced Metrics</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Photo Downloads</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Search Engine Indexing</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Custom Analytics</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </table>
    </TableContainer>
  )
}

export default Table;












const TableContainer = styled.section`
    background-color: red;
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
`


const TableDIV = styled.div``