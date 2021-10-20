import React from 'react'
import Table from './Table';


function EmployeeDetails() {
    
    const [data,setData] = React.useState([]);
    const [parentData,setParentData]=React.useState([])
    const initState={
        name:'',
        age:'',
        address:'',
        department: '',
        salary:'',
        maritalState:false,
        skillSet:[] 
    }
 
   
    const [formData,setFormData] = React.useState(initState);
    const [checkAll,setcheckAll] =React.useState(false);
    const skills=['html','css','javascript','react'];
    const [checkedStatus, setCheckedStatus] = React.useState(
        new Array(skills.length).fill(false)
      );

    

    const handleChange=(e)=>{
        console.log(e.target.value)
        let {name,value} =e.target;
        // name==="salary" ? value=+value: ""
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setData([...data,formData])
        setParentData([...parentData,formData])
    }
    console.log(data)
    const handleSkillChange=(e) =>{
        let {name,checked}=e.target
        if(checked){
            setFormData({...formData,skillSet:[...formData.skillSet,name]})
        }
        else{
            let updatedSkills=formData.skillSet.filter((item)=>item!==name)
            setFormData({...formData,skillSet:updatedSkills})
        }
    }
    const handleCheckAll =(e)=>{
        const checkAllStatus = checkedStatus.map((e)=>(checkAll ? false: true));
        setCheckedStatus(checkAllStatus);
        setcheckAll(!checkAll);
        setFormData({...formData,skills:checkAllStatus})
    }
    const {department,maritalState} = formData;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                

                <input type='text' placeholder ='enter name' name='name' onChange={handleChange}/>
                <input type='text' placeholder ='enter age' name='age' onChange={handleChange} />
                <input type='text' placeholder ='enter address' name='address' onChange = {handleChange} />
                <select name='department' value={department} onChange={handleChange}>
                    {['select branch','cse','it','mec','civ','ece','eee'].map((e,i)=>{
                       return  (<option key={i} value={e}>{e}</option>)
                    })}
                    
                </select>
                <input type='checkbox' name='maritalState' checked={maritalState} onChange={handleChange} />
                <label>Marital Status</label>
                <input type='text' placeholder='enter salary' name='salary' onChange={handleChange}/>
                <input type='checkbox' checked={checkAll} onChange={handleCheckAll} />
                <label>checkAll</label>
                
                {skills.map((e,i)=>{
                    return <div key={i}>
                        <input type='checkbox'  name={e} onChange={handleSkillChange}/>
                        <label>{e}</label>
                        </div>
                    })}
                <input type='submit' />
            </form>
            <Table data={data} setData={setData} parentData={parentData}/>
        </div>
    )
                
}

export default EmployeeDetails
