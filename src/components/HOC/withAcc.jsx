import {useState} from 'react'

const withAcc = (Component, text) => {

    return ()=>{

const [open, setOpen] = useState(false)

        return (
<>
<h3 onClick={()=> setOpen(o => !o)}>{text}</h3>
<div className={"acc" + (open? " open": "")}>

            <Component/>
</div>
</>

        )
    }
}

export default withAcc