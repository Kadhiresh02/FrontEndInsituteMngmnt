 
// // import { Outlet } from 'react-router-dom'
// // import StudentDashboard from './StudentDashboard'
// // import React, { useState } from "react";
// // import StuProfile from "./StuProfile";
// // import StuCourseEnrollment from "./StuCourseEnrollment";
// // import StuBatches from "./StuBatches";
// // import "./StudentDashboard.css";

// // const SudentMainDash = () => {

// //      const [activeSection, setActiveSection] = useState("profile");
// //     return (
// //         <div>
// //             <div  > <div className="sidebar">
// //         <h2 className="dashboard-heading">Dashboard</h2>
// //         <ul className="menu">
// //           <li
// //             className={activeSection === "profile" ? "menu-item active" : "menu-item"}
// //             onClick={() => setActiveSection("profile")}
// //           >
// //             My Profile
// //           </li>
// //           <li
// //             className={activeSection === "courses" ? "menu-item active" : "menu-item"}
// //             onClick={() => setActiveSection("courses")}
// //           >
// //             Course Enrollment
// //           </li>
// //           <li
// //             className={activeSection === "batches" ? "menu-item active" : "menu-item"}
// //             onClick={() => setActiveSection("batches")}
// //           >
// //             Batches
// //           </li>
// //         </ul>
// //       </div>
      
      
// //       <div className="content">
// //         {activeSection === "profile" && <StuProfile/>}
// //         {activeSection === "courses" && <StuCourseEnrollment/>}
// //         {activeSection === "batches" &&  <StuBatches/>}
// //       </div>
// //       </div>
// //            <div>
// //           <Outlet></Outlet>
// //            </div>
// //         </div>
// //     )
// // }

// // export default SudentMainDash


// import { Outlet, Link } from 'react-router-dom';
// import "./StudentDashboard.css";

// const StudentMainDash = () => {
//   return (
//     <div>
//       <div className="sidebar">
//         <h2 className="dashboard-heading">Dashboard</h2>
//         <ul className="menu">
//           <li className="menu-item">
//             <Link to="profile">My Profile</Link>
//           </li>
//           <li className="menu-item">
//             <Link to="StuCourseEnrollment">Course Enrollment</Link>
//           </li>
//           <li className="menu-item">
//             <Link to="StuBatches1">Batches</Link>
//           </li>
//         </ul>
//       </div>

//       <div className="content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default StudentMainDash;
