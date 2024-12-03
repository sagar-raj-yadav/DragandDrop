import React, { useRef, useState } from 'react'

const DragDrop = ({initialdata}) => {
    // console.log(initialdata)
    const [data,setdata]=useState(initialdata);

    const dragitem=useRef();
    const dragcontainer=useRef();

    const handledragstart=(e,item,container)=>{
        dragitem.current=item;
        dragcontainer.current=container;
        e.target.style.opacity="0.5";
    }

    const handledragend=(e)=>{
        e.target.style.opacity="1"
    }

    const handledrop=(e,targetcontainer)=>{
        const item=dragitem.current;
        const sourcecontainer=dragcontainer.current;
        setdata((prev)=>{
            const newdata={...prev} ;
            newdata[sourcecontainer]=newdata[sourcecontainer].filter((i)=>i!==item);
            newdata[targetcontainer]=[...newdata[targetcontainer],item];
            return newdata;
        })
    }

    const handledraghover=(e)=>{
        e.preventDefault();
    }

  return (
    
    <div style={{display:"flex",justifyContent:"space-around"}}>
    {Object.keys(data).map((container,index)=>{
        return (
            <div key={index}
            onDrop={(e)=>handledrop(e,container)}
            onDragOver={handledraghover}
            style={{
                background:"f0f0f0",
                padding:"1rem",
                width:250,
                border:"2px solid red" ,
                backgroundColor:"grey",
                margin:"20px",
                minHeight:300
            }}
            >
            {container}
            {
                data[container].map((item,index)=>{
                    return(
                        <div key={index}
                        draggable
                        onDragStart={(e)=>handledragstart(e,item,container)}
                        onDragEnd={handledragend}
                        style={{
                            userSelect:"none",
                            padding:16,
                            margin:"0 0 8px 0",
                            backgroundColor:"white",
                            cursor:"move"
                        }}
                        >
                        {item}
                        </div>
                    )

                })
            }
            </div>
        )
    })}
    </div>



  )
}

export default DragDrop