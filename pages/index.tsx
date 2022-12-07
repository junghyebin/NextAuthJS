import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    const{data:session, status}=useSession()

    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                Status: {status}<br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <h2>비유저 화면</h2>
            Not signed in <br />
            Status: {status}<br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default Login;