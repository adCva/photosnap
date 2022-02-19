import React from 'react';
import styled from "styled-components";


function Table() {
  return (
    <TableContainer>
       <h3>Compare</h3>
       <div className="table-content">
         {/* =================== Table Head =================== */}
         <div className="table-head">
           <h5>The features</h5>
           <div>
             <h6>basic</h6>
             <h6>pro</h6>
             <h6>business</h6>
           </div>
         </div>

        {/* =================== Table Body =================== */}
        <div className="table-body">

          <div className="table-row">
            <h4>Unlimited Story Posting</h4>
            <div>
              <h6><span>basic</span><img src="./images/check.svg" alt="Check" /> </h6>
              <h6><span>pro</span><img src="./images/check.svg" alt="Check" className="img-margin"/></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>

          <div className="table-row">
            <h4>Unlimited Photo Upload</h4>
            <div>
              <h6><span>basic</span><img src="./images/check.svg" alt="Check" /> </h6>
              <h6><span>pro</span><img src="./images/check.svg" alt="Check" className="img-margin"/></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>

          <div className="table-row">
            <h4>Embedding Custom Content</h4>
            <div>
              <h6><span>basic</span></h6>
              <h6><span>pro</span><img src="./images/check.svg" alt="Check" /></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>

          <div className="table-row">
            <h4>Customize Metadata</h4>
            <div>
              <h6><span>basic</span></h6>
              <h6><span>pro</span><img src="./images/check.svg" alt="Check" /></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>

          <div className="table-row">
            <h4>Advanced Metrics</h4>
            <div>
              <h6><span>basic</span></h6>
              <h6><span>pro</span></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>

          <div className="table-row">
            <h4>Photo Downloads</h4>
            <div>
              <h6><span>basic</span></h6>
              <h6><span>pro</span></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>

          <div className="table-row">
            <h4>Search Engine Indexing</h4>
            <div>
              <h6><span>basic</span></h6>
              <h6><span>pro</span></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>

          <div className="table-row">
            <h4>Custom Analytics</h4>
            <div>
              <h6><span>basic</span></h6>
              <h6><span>pro</span></h6>
              <h6><span>business</span><img src="./images/check.svg" alt="Check" /></h6>
            </div>
          </div>


        </div>
       </div>
    </TableContainer>
  )
}

export default Table;







// ========================================================== Styled Components ==========================================================

// ====================================== Container
const TableContainer = styled.section`
    width: 90%;
    max-width: 750px;
    margin: 1.5rem auto;
    text-align: center;

    @media (min-width: 768px) {
      margin: 3.5rem auto;
    }

    @media (min-width: 1200px) {
      margin: 7rem auto 5rem;
    }

    h3 {
      display: none;
      font-size: 1.3rem;
      font-weight: var(--fw-bold);
      text-transform: uppercase;

      @media (min-width: 768px) {
        display: initial;
      }
    }


    // ========================= Table Content
    .table-content {
      text-align: left;
      margin-top: 2rem;

      @media (min-width: 768px) {
        margin-top: 5rem;
      }
    }


    // ========================= Table Head
    .table-head {
      display: flex;
      padding: 0 1rem 1.5rem;
      border-bottom: 1px solid var(--black);

      @media (min-width: 768px) {
        justify-content: space-between;
        padding: 0 1.5rem 1.5rem;
      }

      h5 {
        width: 40%;
        font-size: 0.7rem;
        font-weight: var(--fw-bold);
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      div {
        width: 50%;
        display: none;
        justify-content: space-between;

        @media (min-width: 768px) {
          display: flex;
        }

        h6 {
          font-size: 0.7rem;
          font-weight: var(--fw-bold);
          letter-spacing: 2px;
          text-transform: uppercase;

          @media (min-width: 768px) {
            opacity: 0.8;
          }
        }
      }
    }

    // ========================= Table Body
    .table-body {


      // ========================= Table Row
      .table-row {
        padding: 1.5rem 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);

        :last-of-type {
          border-bottom: none;
        }

        @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
            padding: 1.85rem 1.5rem;
        }

        @media (min-width: 1200px) {
            padding: 2rem 1.5rem;
        }


        h4 {
          font-size: 0.7rem;
          font-weight: var(--fw-bold);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          
          @media (min-width: 768px) {
            width: 40%;
            margin-bottom: 0;
            opacity: 0.8;
          }
        }

        div {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          @media (min-width: 768px) {
            width: 50%;
          }

          h6 {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: var(--very-dark-gray);
            font-size: 0.65rem;
            font-weight: var(--fw-medium);
            letter-spacing: 1px;
            text-transform: uppercase;

            img {
              width: 11px;
              margin-top: 1.5rem;
            }

            @media (min-width: 768px) {              
              span {
                display: none;
              }

              img {
                width: 13px;
                margin-top: 0;
              }

              .img-margin {
                margin-right: 0.75rem;
              }
            }
          }
        }


      }
    }
`