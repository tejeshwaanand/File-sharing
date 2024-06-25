import { useRef,useState, useEffect} from 'react';
import './App.css';
import {uploadFile} from './services/api';

function App() {

  

  const [file,setFile] = useState('');
  const [result,setresult] = useState('');

  const fileinputref = useRef();
  const onbuttonclick= ()=>{
    fileinputref.current.click();
  }
   useEffect(()=>{
    const getfile = async ()=>{
      const data= new FormData();
      if(file){
        data.append("name",file.name);
        data.append("file",file);
        let response = await uploadFile(data);
        setresult(response.path);
      }
    }
    getfile();

   }
   ,[file])
  
console.log(file);

  const logo =`https://www.winzip.com/static/wz/images/learn/features/file-sharing/file-sharing.png`;
  return (
    <div className='container' style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover' }}>
      {/* <img src={logo} alt="banner"></img> */}
      <div className='wrapper'>
        <h1>Simple file sharing</h1>
        <p>Upload and share the download link.</p>
        <input type='file' ref={fileinputref} onChange={(e)=>setFile(e.target.files[0])}/>
        <button onClick={()=>onbuttonclick()}>Upload</button>
        <a href={result} target='_blank'>{result}</a>
      </div>
    </div>
  );
}

export default App;
