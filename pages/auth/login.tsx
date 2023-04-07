import {ChangeEvent, FormEvent, useState} from "react";



export default function Login() {

        const [credentials, setCredentials] = useState({username: '', password: ''})



    function onSubmit(e: FormEvent<HTMLFormElement>){

        e.preventDefault()
        console.log('pages/auth/login.tsx > credentials', credentials)

    }

    return (
        <div className="container mt-[10vh]">
            <h2 className="text-center" >Connectez-vous</h2>

            <form action="/api/auth/login" method="POST"  onSubmit={onSubmit} className="flex flex-col m-auto mt-[10vh] lg:w-[30%] ">
                <label className="mb-5 flex flex-col justify-between" htmlFor="username"> Nom d utilisateur
                    <input type="text" name="username" onChange={(e: ChangeEvent<HTMLInputElement>) => {setCredentials({...credentials, username:e.target.value})}} value={credentials.username} />
                </label>
                <label htmlFor="password" className="flex flex-col justify-between" >Mot de passe
                    <input type="password" name="password" onChange={(e: ChangeEvent<HTMLInputElement>) => {setCredentials({...credentials, password:e.target.value})}} value={credentials.password} />
                </label>

                <button className="cta mt-10" type="submit">Se connecter</button>
            </form>
        </div>
    )
}