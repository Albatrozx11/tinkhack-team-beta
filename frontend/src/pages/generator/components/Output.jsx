import React, { useState,useEffect } from 'react'
import edit from '../../../assets/Edit.jpg'
import './Output.css'
import jsPDF from 'jspdf'
import axios from 'axios'
const Output = () => {
  const [content,setContent] =useState('');
  const [Edit,setEdit] =useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/llm-output')
      .then(response => {
        setContent(response.data.output)
        console.log(response.data.text)
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    fetchData();
  }, []);




  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8000/llm-output', {
  //         method: 'GET',
  //       });
  //       const data = await response.json();
  //       setContent(data.text);
  //     } catch (error) {
  //       console.error('Error fetching LLM output:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const handleContent = () =>{
    setContent(content)
    setEdit(true)
  }
  const handlePdf =()=>{
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "in",
      format: [20, 20]
    });
    
    doc.text(content, 1, 1);
    doc.save("two-by-four.pdf");
  }

  return (
    <div className='Output_Main'>
    <div className='Output_Main_upper'>     
    <div className='Dowload_Main'>
        <div className='Download_Main_Left'>
            <div className='Download_Main_Left_Contents'>
                <button onClick={handlePdf}>Edit as per Your Choises<img src={edit} alt="" /></button>
                
            </div>       
        </div>
        <div className='Download_right'>
            <div className='Download_Format_div'>
                <select name="Dowload_Format" id="Download_Format">
                    <option value="selct method">Download</option>
                    <option value="PDF">PDF</option>
                    <option value="Word">Written Format</option>
                </select>
            </div>
            
            {/*<div className='Download_right_columnwise'>
                <div className='Download_button'><h2>Download</h2></div>
                <button>Download</button>
             </div>*/}
            </div>
        </div> 
    </div>
    <div className='Output_Container_Rowwise'>
        <div className='Output_Container'>
          <div className='Language_selector_main'>
              <div className='Language_selector_button'>
                <button>MAL</button>
              </div>
              
          </div>
          <div contentEditable={Edit} onClick={handleContent} onChange={handleContent} className='Generating_container'> 
          {content}
        </div>
        </div>  
    </div>
</div>
  )
}

export default Output