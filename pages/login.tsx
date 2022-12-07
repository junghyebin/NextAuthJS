import {signIn} from 'next-auth/react'
import router from 'next/router'

const Login = () => {
    const login = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = await signIn("email-password-credential",{
            email,
            password,
            redirect: false,
            callbackUrl: "http://localhost:3000/user"
        });
        await router.push(response.url);
    }
    return (
        <form onSubmit={login}>
            <label>
                이메일 :
                <input type="email" name="email" placeholder="test@test.com" />
            </label>
            <label>
                비밀번호 :
                <input type="password" name="password" />
            </label>
            <button type="submit">로그인</button>
        </form>
    )
}
export default Login;