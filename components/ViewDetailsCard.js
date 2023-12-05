// import React from 'react';
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardText,
//   MDBCardTitle,
//   MDBBtn,
// } from 'mdb-react-ui-kit';

// function ViewDetailsCard(issueObj) {
//   return (
//     <div>
//       <MDBContainer>
//         <MDBRow>
//           <MDBCol>
//             <MDBCard className="w-75">
//               <MDBCardBody>
//                 <MDBCardTitle>Title: {issueObj?.title}</MDBCardTitle>
//                 <MDBCardText>
//                   <p>Issue Id: {issueObj?.issueId}</p>
//                   <p>Created: {issueObj?.dateTimeCreated}</p>
//                   <p>Issue Status: {issueObj?.issuestatuses[0].status?.statusName }</p>
//                   <p>Description: {issueObj?.description}</p>
//                 </MDBCardText>
//                 <MDBBtn href={`/issues/edit/${issueId}`}>Edit</MDBBtn>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>

//       </MDBContainer>
//     </div>
//   );
// }

// export default ViewDetailsCard;
