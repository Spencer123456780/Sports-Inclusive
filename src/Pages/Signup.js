import React, {useState} from 'react'

function Signup() {
    const [name, setName] =useState({firstName: '', lastName: ''})
  return (
    <>
        <form>
            {/* spread ...name is used b/c useState doesn't merge object values unlike setState */}
            <input type='text'
                placeholder='Enter firstname'
                value={name.firstName}
                onChange={e=>setName({...name, firstName:e.target.value})}></input>   

           <input type="text"
                placeholder='Enter Lastname '
                value={name.lastName}
                onChange={e=>setName({ ...name, lastName:e.target.value})} />

            <h2>First Name - {name.firstName}</h2>
            <h2>Last Name - {name.lastName}</h2>

            <h2>{JSON.stringify(name)}</h2>
        </form>
    </>
  )
}

export default Signup