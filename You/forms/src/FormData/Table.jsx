import React from 'react'
import styles from './Table.module.css';

function Table({data,setData,parentData}) {
    // // name age  name:'',
    //     age:'',
    //     address:'',
    //     department: '',
    //     salary:'',
    //     maritalState:false,
    //     skillSet
    function sort(field){
        let updatedData=[...parentData].sort((a,b)=>a[field]-b[field])
        setData(updatedData)
    }

    function filter(field) {
        let updatedData = [...parentData].filter((e) => e.department=== field)
        setData(updatedData)
    }
    
     const handleDelete = (i) => {
       
    }


    
    return (
        <div>
            <button onClick={() => sort("salary")}>sort by salary</button>
            <button onClick={() => filter("cse")}>CSE Department</button>
            <button onClick={() => filter("it")}>IT Department</button>
            <button onClick={() => filter("mec")}>MEC Department</button>
            <button onClick={() => filter("civ")}>CIV Department</button>
            <button onClick={() => filter("ece")}>ECE Department</button>
            <button onClick={() => filter("eee")}>EEE Department</button>
            <div className={styles.tableDiv}>
                <div className={styles.singleDiv}>
                     <div >name</div>
                    <div>age</div>
                    <div>address</div>
                    <div>department</div>
                    <div>salary</div>
                    <div>maritalState</div>
                    <div>skillsets</div>
                </div>
            {data.map(({name,age,address,department,salary,maritalState,skillSet},i)=>{
                return <div className={styles.singleDiv} key={i}>
                    <div >{name}</div>
                    <div>{age}</div>
                    <div>{address}</div>
                    <div>{department}</div>
                    <div>{salary}</div>
                    <div>{maritalState}</div>
                    <div>{skillSet.map((item,i)=>{
                        return <span>{item}{i<item.length-1?",":""}</span>
                    })}</div>
                    <button onClick={handleDelete}>Delete</button>
                    </div>
            })}
            </div>
        </div>
    )
}

export default Table
