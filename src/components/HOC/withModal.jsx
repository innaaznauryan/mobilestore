import {useState, useRef, useEffect} from 'react'

const withModal = (Component, smth) => {

console.log("I ran ")

  return () => {
    const [open, setOpen] = useState(false)
    const dialogRef = useRef(null)
    
    function handleDialog(){
        !open ? dialogRef.current.showModal() : dialogRef.current.close()
        dialogRef.current.scrollTop = dialogRef.current.scrollHeight
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