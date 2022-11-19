import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../Service/Config'
import logo from '../../logo.svg';
import  './TestimonialCardStyle.css'

const TestimonialCard = () => {
  const [img, setImg] = useState([])
  const [state, setState] = useState({
    Name: "",
    Post: "",
    Description: "",
    Active: ""
  })

  const [cardData, setCardData] = useState([])
  const getData = () => {
    axios.get(`${baseURL}/all`).then(
      (response) => {
        var result = response.data;
        setCardData(result)
      },
      (error) => {
        console.log(error);
      }
    )
  }
  useEffect(() => {
    getData();
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    var formData = new FormData()
    formData.append('Photo', { "file": img ? img : logo });
    console.log(778868, { "file": img })
    formData.append('Name', state?.Name);
    formData.append('Post', state?.Post);
    formData.append('Description', state?.Description);
    formData.append('Active', state?.Active);
    axios.post(`${baseURL}/post`,
      formData
    )
      .then(function (response) {;
      })
      .catch(function (error) {
      });

  }


  const deleteUser = (id) => {
    axios.delete(`${baseURL}/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    getData();
  }

  const editUser = (id) => {
    axios.get(`${baseURL}/get/${id}`).then(
      (response) => {
        var result = response.data;
        if (id) {
          setState({
            ...state,
            Name: result.Name,
            Description: result.Description,
            Post: result.Post,
            Active: result.Active,
            id: id

          })
        }
      },
      (error) => {
        console.log(error);
      }
    )
    setState(
      {
        ...state,
        Name: "",
        Description: "",
        Post: "",
        Active: "",
        id: ""
      }
    )


  }
  const handleChange = (e) => {
    console.log(123, e.target.files[0])
    let file = e.target.files[0]
    setImg(file)
    // let Reader = new FileReader()
    // Reader.readAsDataURL(e.target.files[0])
    // setImg(Reader)
    // setImg(e.target.files[0])

  }
  console.log(124, img)
  return (
    <>
      <div className="text-right">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
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
                        src={item.Photo.file}
                      />
                      <span className="ms-2">{item?.Name}</span></td>
                    <td>{item?.Post}</td>
                    <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => editUser(item._id)}>Edit</button>
                      <button type="button" class="btn btn-info" onClick={() => deleteUser(item._id)}>Delete</button></td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Form</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" >
              Img :<input className='input' type="file" onChange={((e) => handleChange(e))} />
              Name :<input className='input'  type="text" value={state.Name} onChange={((e) => setState({ ...state, Name: e.target.value }))} />
              Description :<input type="text" className='input'  value={state.Description} onChange={((e) => setState({ ...state, Description: e.target.value }))} />
              Post :<input type="text" className='input'  value={state.Post} onChange={((e) => setState({ ...state, Post: e.target.value }))} />
              Active:<input type="number" className='input'  value={state.Active} onChange={((e) => setState({ ...state, Active: e.target.value }))} />

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              {
                state?.id ?
                  <button type="submit" class="btn btn-primary" >Update</button>
                  :
                  <button type="button" class="btn btn-primary" onClick={(e) => handleClick(e)}>Submit</button>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialCard