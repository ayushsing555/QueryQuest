import React, {useEffect, useState} from 'react';
import 'prismjs';
// import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
const Prism = ({code}) => {
    const [BigLength,setBigLength] = useState(true);
    const [extended,setExtended] = useState(true);
    useEffect(()=>{
        if(code.length<=200){
        setBigLength(false);
    }
    else{
        setExtended(false);
    }
    },[])
    const ReadMore = () =>{
        setExtended(true)
    }
    const ReadLess = () =>
    {
        setExtended(false)
    }
    return (
        <>
            <pre>
                <code className="language-javascript">
                    {
                        !BigLength ?
                         <>
                            {code}
                           
                         </> :
                           !extended ?
                            <>
                                {code.substring(0, 100)}
                                <button className='ml-4 underline text-green-800' onClick={ReadMore}>...ReadMOre</button>
                            </>:
                            <>
                                {code}
                                <button className='ml-4 underline text-green-800' onClick={ReadLess}>...ReadLess</button>
                            </>
                    }
                </code>
            </pre>
        </>


    );

};

export default Prism;