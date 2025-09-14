import { useState } from 'react'
import Input from '../../componets/input/Input'
export default function Login () {

    const [ id, setId ] = useState('')
    const [ pass, setPass ] = useState('')
    function loginClick () {
        alert( `id : ${id} pass: ${pass}` )
    }

    return (
        <div>
            <div>
                <h2>ID</h2>
                <Input type={ 'text' } value={ id } onChange={ setId }/>
            </div>
            <div>
                <h2>Pass</h2>
                <Input type={ 'text' } value={ pass } onChange={ setPass }/>
                <button onClick={loginClick}>로그인</button>
            </div>
        </div>
    );
}