import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Config, { baseURL } from '../../Service/Config'
import './TestimonialCardStyle.css'
import TestimonialForm from './TestimonialForm'
import { computeHeadingLevel } from '@testing-library/react'

const TestimonialSetting = () => {
  const [openModel,setOpenModel] = useState(false)
  console.log(2323,openModel)

  const [cardData, setCardData] = useState([])

  const getData = async() => {
    const result = await  Config.get('get')
    try{
      if(result.status===200){
        setCardData([...result.data])
      }
    }catch(error){
      console.log("Error",error)
    }
  }
 
  useEffect(() => {
    getData();
  }, [])
 


  const deleteUser = async(id) => {
    const result = await Config.delete(`delete/${id}`)
   try {
      if(result.status===200){
      getData();
    }
  }catch(error){
    console.warn("Error",error)
  }
  }

  const handleModel = () => {
    setOpenModel(true)
  }
  // const editUser = (id) => {
  //   Config.get(`get/${id}`).then(
  //     (response) => {
  //       var result = response.data;
  //       console.log(666, result)
  //       if (id) {
  //         setState({
  //           ...state,
  //           Photo: result?.Photo,
  //           Name: result.Name,
  //           Description: result.Description,
  //           Post: result.Post,
  //           Active: result.Active,
  //           id: id

  //         })
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }



  return (
    <>
      <div className="text-right">
        <button type="button" 
        className="btn btn-primary"
         data-toggle="modal" 
         data-target="#exampleModal"
         onClick={handleModel}
          >
          Create
        </button>

      </div>
      <div class="container table-responsive py-5">
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Post</th>
              <th scope="col">Action</th>


            </tr>
          </thead>
          <tbody>
            {
              cardData?.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>
                      <img
                        height="40"
                        width="40"
                        src={item.Photo}
                      />
                      <span className="ms-2">{item?.Name}</span>
                    </td>
                    <td>{item?.Post}</td>
                    <td>
                      <button
                       type="button" 
                       className="btn btn-primary" 
                       data-toggle="modal" 
                       data-target="#exampleModal" 
                       onClick={() => setOpenModel(item)}
                       >
                       Edit
                       </button>
                      <button 
                      type="button" 
                      className="btn btn-info"  
                      onClick={() => deleteUser(item._id)}
                      >
                      Delete
                      </button>
                    </td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    {openModel &&
      <TestimonialForm 
      getdata={cardData}
      setOpenModel ={setOpenModel}
      data = {openModel}
      />}
    </>
  )
}

export default TestimonialSetting;