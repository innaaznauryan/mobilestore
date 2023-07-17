import {useState, useRef} from 'react'

const withModal = (Component, smth) => {


  return () => {
    const [open, setOpen] = useState(false)
    const dialogRef = useRef(null)
    function handleDialog(){
       !open? dialogRef.current.showModal() : dialogRef.current.close()
        setOpen(o => !o)
    }

    return (
      <>
        <button onClick={handleDialog}>Show {smth}</button>
        <dialog ref={dialogRef} onClose={() => setOpen(false)}>
            <Component/>
        </dialog>
        </>
    )
  }
}

export default withModal