import React , { useEffect,useState}from 'react'
import Spinner from "react-bootstrap/Spinner";
import Form from 'react-bootstrap/Form';

import Axios from 'axios'

export default function Person() {
 const[person, setPerson] = useState([])
 const[searchFun, setSearchFun] = useState([])


    useEffect(() => {
        personAdd()
     }, []);
     function personAdd() {
            Axios.get("https://myjson.dit.upm.es/api/bins/h8pl")
            .then((result) => {
                setPerson(result.data)
                setSearchFun(result.data)
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
            })
     }
     function search(value) {
        let searchPerson = person.filter(item => {
            return (item.name.toLowerCase().includes(value.toLowerCase()))
        })
        setSearchFun(searchPerson)
    }
    function groupSearch(value) {
        let group = person.filter(item => {
            return (item.group.includes(value.target.value))
        })
        setSearchFun(group)
    }
    function courseSearch(value) {
         let course = person.filter(item => {
            return (item.course.includes(value.target.value))
         })
         setSearchFun(course)
    }
    function paymentSearch(value) {
        let payment = person.filter(item => {
            return (item.status_payment === (value.target.value))
        })
        setSearchFun(payment)
    }

  return (
    <div className='container'>
      <div className='row m-4' >
        <div className='col '>
            <input onInput={(val) => search(val.target.value)} type={'text'} placeholder={"Ism kiriting"} />
        </div>
        <div className='col'>
             <Form.Select aria-label="Default select example " onChange={(val) => groupSearch(val)} >
                        <option  disabled>Open this select menu</option>
                        <option  value="soff_001">Soff_001</option>
                        <option  value="soff_002">Soff_002</option>
                        <option value="soff_003">Soff_003</option>
            </Form.Select>
        </div>
        <div className='col'>
        <Form.Select aria-label="Default select example " onChange={(val) => courseSearch(val)} >
                        <option disabled>Open this select menu</option>
                        <option  value="back-end">Back_end</option>
                        <option  value="front-end">Front-end</option>
                        
            </Form.Select>
        </div>
        <div className='col'>
        <Form.Select aria-label="Default select example " onChange={(val) => paymentSearch(val)} >
                        <option disabled>Open this select menu</option>
                        <option  value="paid">Paid</option>
                        <option  value="unpaid">Unpaid</option>
                        <option value="delay">Delay</option>
            </Form.Select>
        </div>
      </div>
      {(searchFun.length > 0) ? (
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Group</th>
                                <th>Course</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchFun.map((item, index) => {
                                    return (
                                        <tr key={index} >
                                            <td >{item.id}</td>
                                            <td>{item.name}</td>
                                            <td >{item.password}</td>
                                            <td >{item.role}</td>
                                            <td >{item.group}</td>
                                            <td >{item.course}</td>
                                            <td >{item.status_payment}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
                    : (
                        <Spinner animation="border" size="100px" />

                    )
            }
    </div>
  )
}
