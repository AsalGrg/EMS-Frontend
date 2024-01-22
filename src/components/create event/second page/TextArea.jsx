import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateCreateEventField } from "../../../pages/create event/CreateEventSlice";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextArea = () => {


    const dispatch = useDispatch();
    const formData= useSelector(state=> state.createEvent)

    const handleDoneEditing=(e)=>{
        
        e.stopPropagation();

        dispatch(updateCreateEventField({
          field: 'isAboutClicked',
          value: false
        }))
    }


    return (
      <>
        <ReactQuill theme="snow" defaultValue={formData.aboutEvent} 
        onChange={(e)=>{
          dispatch(updateCreateEventField({
            field: "aboutEvent",
            value: e
          }))
        }}/>


        <div className="buttonsFormatting mb-3">
          <button onClick={handleDoneEditing} className="signButton">Done Editing</button>
        </div>
      </>
    );
}

export default TextArea
