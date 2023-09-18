import {useRef, useEffect} from 'react'
import "./filter.style.scss"

const Filter = ({setPhones, data, filterMode, setFilterMode}) => {

  const dialogRef = useRef(null)

  useEffect(()=> {
    if(filterMode) {
      dialogRef.current.showModal()
      dialogRef.current.onclose = () => setFilterMode(false)
    }
  }, [filterMode])


function handleDialogSubmit (e){

    const objData = new FormData(e.target)
    const newObj = {...Object.fromEntries([...objData])}

    if (!e.target.min.value) newObj.min = -Infinity
    if (!e.target.max.value) newObj.max = Infinity

  const filtered = data.filter((elem) =>  {

  if (![...objData.values()].find(elem => elem.startsWith("phone"))) return +elem.price > +newObj.min && +elem.price < +newObj.max

  else return +elem.price > +newObj.min && +elem.price < +newObj.max && [...objData.values()].includes("phone" + elem.brandId)
}) 
  
setPhones(filtered)

  e.target.reset()
}

    
  return (
    <dialog ref={dialogRef} >

    <form onSubmit={handleDialogSubmit} action="" method="dialog">


    <input type="number" name='min' placeholder='Min' />
    <input type="number" name='max' placeholder='Max' />

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

<button type='submit'>Submit</button>

    </form>
    </dialog>
  )
}

export default Filter