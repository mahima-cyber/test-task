import React, { useEffect, useState } from 'react'
import Config from '../../Service/Config'
import './TestimonialCardStyle.css'
import { useFileUpload } from 'use-file-upload'

const TestimonialForm = ({ data, setOpenModel }) => {
    console.log(6565, data)
    const [file, selectFile] = useFileUpload()

    const [state, setState] = useState({
        Name: "",
        Post: "",
        Description: "",
        Active: "",
       
    })
    const defaultImage = 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'

    const [img, setImg] = useState(defaultImage)

    console.log(245466, state)
   const imgs = state?.Photo
   console.log(6767,imgs)
    // const defaultImage = 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'
    useEffect(() => {
        if (data?._id) {
            setState({
                Name: data?.Name,
                Post: data?.Post,
                Description: data?.Description,
                Active: data?.Active,
                Photo: data?.Photo,
            })
        }
    }, [data])

    var formData = new FormData()
    formData.append('Photo', img ? img : defaultImage);
    formData.append('Name', state?.Name);
    formData.append('Post', state?.Post);
    formData.append('Description', state?.Description);
    formData.append('Active', state?.Active);

    const handleSubmit = (event) => {
        event.preventDefault()  
        Config.post('post', formData)
            .then(function (response) {
                console.log(67, response);
                setOpenModel(false)
                data()
            })
            .catch(function (error) {
                // let message = typeof err.response !== "undefined" ? err.response.message : err.message;
                // console.warn("error",message)
            });
        
          
    }
    const handleImage = (e) => {
        console.log("imageurl",e.target.files[0])
         let file = e.target.files[0];
        setImg(file)
    }
   console.log("img",img)
    const handleUpdate = (_id) => {
        Config.put(`update/${_id}`, formData)
            .then(function (response) {
                console.log(56, response);
            })
            .catch(function (error) {
                console.log("Update Error",error)
            });

        setState({
            Name: "",
            Post: "",
            Description: "",
            Active: "",
            Photo: ''
        })
        setOpenModel(false)
        data()

    }

    return (
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
                        <div className='ImageFix'>
                            <input
                                className='input'
                                type="file"
                                accept='image/*'
                                // onChange={((e) => setState({ ...state, Photo: e.target.files }))}
                                onChange={handleImage}

                            />
                            <img src={img} alt='' />
                        </div>
                        Name :
                        <input
                            className='input'
                            type="text"
                            value={state.Name}
                            onChange={((e) => setState({ ...state, Name: e.target.value }))}

                        />
                        Description :
                        <input
                            type="text"
                            className='input'
                            value={state.Description}
                            onChange={((e) => setState({ ...state, Description: e.target.value }))} />
                        Post :
                        <input
                            type="text"
                            className='input'
                            value={state.Post}
                            onChange={((e) => setState({ ...state, Post: e.target.value }))}

                        />
                        Active:
                        <input
                            type="number"
                            className='input'
                            value={state.Active}
                            onChange={((e) => setState({ ...state, Active: e.target.value }))}
                        />

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        {
                            data?._id ?
                                <button type="submit" class="btn btn-primary" onClick={(e) => handleUpdate(data?._id)} >Update</button>
                                :
                                <button type="button" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Save</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialForm