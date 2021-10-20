// import React from 'react'
// import { useState } from 'react';

//     const initState = {
//         fullname: "",
//         gender: "",
//         maritalStatus: false,
//         education:"",
//         skills: []
// };

// const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "ANGULAR", "NODEJS"]
// function EmployeeForm() {

//     const [data, setData] = useState(initState);
//     const [employeesFormData, setEmployeesFormData] = useState([]);
//     const [checkAll, setCheckAll] = useState(false)
//     const [checkedStates, setCheckedStates] = useState(
//         new Array(skills.length).fill(false)
//     );

//     const handleChange = (e) => {
//         console.log(e.target);
//         const { name, value, type, checked } = e.target
//         const newValue = type === "checkboc" ? checked : value;
//         console.log(name, newValue);
//         setData({ ...data, [name]: newValue });
//        // console.log(type.value);
//     }

//     const handleSkillsChange = (i) => {
//         const newCheckedState = checkedStates.map((item, index) =>
//     index === i ? !item : item
//     );
//     setCheckedStates(newCheckedState);
//     setData({...data, skillset: newCheckedState})
// };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setEmployeesFormData([...employeesFormData, data]);
//     }
//     console.log(employeesFormData);
    
//     const handleCheckAll = () => {
//         const checkedAllStates = checkedStates.map(item => !item)
//         setCheckAll(checkedAllStates);
//         setCheckAll(!checkAll);
//         setData({ ...data, skillset: checkedAllStates });
//     };

// const { fullname, gender, maritalStatus, education, skillset } = data;
    
//     return (
//         <div>
//             <h1>Employee Details</h1>
//             <form onSubmit={handleSubmit}>
//                 {/* {full Name} */}
//                 <input type="text"
//                     placeholder="Enter Full Name"
//                     value={fullname}
//                     name="fullname"
//                     onChange={handleChange} />
//                 {/* gender */}
//                 {
//                     ["Male", "Female", "Other"].map((item, index) => {
//                         return (
//                             <div key={index}>
//                                 <input
//                                     type="radio"
//                                     value={item}
//                                     name="gender"
//                                     onChange={handleChange}
//                                 />
//                                 <label>{item}</label>
//                             </div>
//                         );
//                     })}
//                 {/* maritalStatus */}
//                 <input name="maritalStatus"
//                     type="checkbox"
//                     onChange={handleChange}
//                     checked={maritalStatus}
//                 />
//                 <label>Marital Status</label>

//                 {/* Qualification */}
//                 <select name="education"
//                     value={education}
//                     onChange={handleChange}
//                 >
//                     {["10th", "12th", "Graduation", "Post Graduation"].map(
//                         (item, index) => {
//                             return (
//                                 <option key={index} value={item}>
//                                     {item}
//                                 </option>
//                             );
//                         }
//                     )}
//                 </select>
//                 <input type="checkbox"
//                     checked={checkAll}
//                     onChange={handleCheckAll} />
//                 <label>CheckAll</label>
//                 {
//                     skills.map((item, index) => {
//                         return <div key={item}>
//                             <input type="checkbox"
//                                 checked={checkedStates[index]}
//                                 onChange={() => handleSkillsChange(index)} />
//                             <label>{item}</label>
//                         </div>
//                     })
//                 }
//                 <input type="submit" />
//             </form>
//         </div>
//     );
// }

// export default EmployeeForm

import React from "react";
const initState = {
  full_name: "",
  gender: "",
  marital_status: false,
  education: "",
  skillsset: [],
};

function EmployeeForm() {
  const skills = ["HTML", "JAVASCRIPT", "CSS", "NODEJS", "ANGULAR","REACT"];
  const [data, setData] = React.useState(initState);
  const [employeeFormData, setEmployeeFormData] = React.useState([]);
  const [checkAll, setCheckAll] = React.useState(false);
  const [checkedStatus, setCheckedStatus] = React.useState(
    new Array(skills.length).fill(false)
  );

  const imageRef = React.useRef()
  const handleChange = (e) => {
    // console.log(imageRef.current.)
    console.log(e.target);
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setData({ ...data, [name]: newValue });
  };

  const handleSkillChange = (i) => {
    const newChecked = checkedStatus.map((e, index) => (index === i ? !e : e));
    setCheckedStatus(newChecked);
    setData({ ...data, skills: newChecked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeFormData([...employeeFormData, data]);
  };
  console.log(employeeFormData);

  const handleCheckAll = (e) => {
    const checkAllStatus = checkedStatus.map((e) => (checkAll ? false : true));
    setCheckedStatus(checkAllStatus);
    setCheckAll(!checkAll);
    setData({ ...data, skillsset: checkAllStatus });
  };
  const { full_name, marital_status, education } = data;
  return (
      <>
        <form onSubmit={handleSubmit}>
            <h1>Employee Details</h1>
      <input
        type="text"
        placeholder="Enter full name"
        value={full_name}
        name="full_name"
        onChange={handleChange}
      />

      {["Male", "Female", "Others"].map((e, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={e}
              name="gender"
              onChange={handleChange}
            />
            <label>{e}</label>
          </div>
        );
      })}

      <div>
        <input
          type="checkbox"
          name="marital_status"
          checked={marital_status}
          onChange={handleChange}
        />
        <label>Marital Status</label>
      </div>
      <div>
        <select name="education" value={education} onChange={handleChange}>
          {["10th", "12th", "graduation","Post Graduation"].map((e, i) => {
            return (
              <option key={i} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
      {/* <input type="checkbox" placeholder="" /> */}
      <input type="checkbox" checked={checkAll} onChange={handleCheckAll} />
      <label>CheckAll</label>

      {
      skills.map((e, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={checkedStatus[i]}
              onChange={() => handleSkillChange(i)}
            />
            <label>{e}</label>
          </div>
        );
      })}
        <input type="file" name="image" onChange={handleChange} ref={imageRef}/>
      <input type="submit" />
      </form>
      {data.image && <img src={data.image} alt="image" />}
      </>
  );
}

export default EmployeeForm;
