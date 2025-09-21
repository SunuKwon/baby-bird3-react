import { useState, useCallback } from 'react'
import Input from '../../componets/input'
import './index.css'
import Button from '../../componets/button'
export default function Index () {

    const [ id, setId ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState([])
    const loginClick = useCallback(() => {
        const message= []
        if ( !id ) message.push('아이디를 입력하세요.')
        if ( !pass ) message.push('비밀번호를 입력하세요.')
        if ( id && pass ) message.push('환영합니다.')

        return setErrorMessage(message)
    }, [ id, pass ] )

    return (
        <div className='Login_input'>
            <h1 className='login_title'>Baby Bird</h1>
            <Input type={ 'text' } value={ id } onChange={ setId } placeholder= '아이디를 입력해주세요.'/>
            <Input type={ 'text' } value={ pass } onChange={ setPass } placeholder= '비밀번호를 입력해주세요.'/>
            <Button value={ '로그인' } onClick={loginClick}/>
            <div className='error_message'>
                { errorMessage.map( (errMsg, index) => {
                    return (
                        <p style={{ color: errMsg.includes('환영') ? 'blue' : 'red' } } key={index}>{errMsg}</p>
                    )
                } ) }
            </div>
        </div>
    );
}