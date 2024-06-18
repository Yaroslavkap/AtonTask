import React, {useState} from 'react'
import "./Login.css"
import { data } from '../data'
import { useNavigate} from 'react-router-dom'


const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const router = useNavigate()

    const usersData = [...data.users]
    console.log(usersData)

    const checkPass = (post, users) => {
        const { login, password } = post
        const user = users.find((user) => user.login === login && user.password === password)
        return user !== undefined
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const post = {
            "login": login,
            "password": password
        }
        if(checkPass(post, usersData)) {
            console.log("yes")
            router(`/my/${login}`)
        } else {
            setErr("неправильный логин или пароль. Попробуйте ivan 123")
        }
        console.log(post)
        
    }

  return (
    <div className='login'>
        <form className='log_form' onSubmit={handleSubmit}>
            <h1>Вход в систему</h1>
            <div className='log'>
                <label htmlFor='login'>Логин:</label>
                <input name='login' type='text' placeholder='введите логин' value={login} onChange={e => setLogin(e.target.value)}/>
            </div>

            <div >
                <label htmlFor='password'>Пароль:</label>
                <input name='password' type='password' placeholder='введите пароль' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <p style={{color:"red"}}>{err}</p>

            {/* <div className='log_link'>
                <Link to='/registration' >Регистрация</Link>
            </div> */}

            <button className='log_button'>Войти</button>
        </form>
    </div>
  )
}

export default Login