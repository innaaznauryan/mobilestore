import {useRef, useEffect} from 'react'

const NarekFilter = ({fn, data}) => {



    const dialogRef = useRef(null)

    useEffect(()=> {


       window.addEventListener("keydown", function(e){
        if(e.key == "u" && e.ctrlKey && e.altKey) {
            dialogRef.current.showModal()
        }

       })

    }, [])



function handleDialogSubmit (e){

    const objData = new FormData(e.target)


  const boo = data.filter((elem) =>  {
 console.log([...objData.values()])
    return +elem.price > +e.target.min.value && +elem.price < +e.target.max.value && [...objData.values()].includes(elem.brandId.toString())
}) 


  
  fn(boo)

    e.target.reset()
}

    
  return (
    <dialog ref={dialogRef}>

        <form onSubmit={handleDialogSubmit} action="" method="dialog">


    <input value={20000} type="number" name='min' placeholder='Min' />
    <input value={88500} type="number" name='max' placeholder='Max' />

    
    <div className="phoneDiv">
        <label htmlFor="phone1">Samsung</label>
    <input value="phone1" type="checkbox" name="phone1" id="phone1" />
    </div>
   <div className="phoneDiv">
     <label htmlFor="phone2">Xiaomi</label>
    <input value="phone2" type="checkbox" name="phone2" id="phone2" />
   </div>
 <div className="phoneDiv">
       <label htmlFor="phone3">Motorola</label>
    <input value="phone3" type="checkbox" name="phone3" id="phone3" />
 </div>
   <div className="phoneDiv">
     <label htmlFor="phone4">iPhone</label>
    <input value="phone4" type="checkbox" name="phone4" id="phone4" />
   </div>
  <div className="phoneDiv">
      <label htmlFor="phone5">Nokia</label>
    <input value="phone5" type="checkbox" name="phone5" id="phone5" />
  </div>

<input type="submit" value="Submit" />
        </form>
    </dialog>
  )
}

export default NarekFilter