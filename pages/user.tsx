import { useSession, signOut } from "next-auth/react"

const User = () =>{
    const{data:session, status}=useSession()

    console.log(status)
    console.log(session?.user?.email)
    if (session) {
        return (
            <>
            <h2>유저 화면</h2>
                Signed in as {session?.user?.email} <br />
                Status: {status}<br />
                <button onClick={() => signOut({callbackUrl: '/'})}>Sign out</button>
            </>
        )
    }
    
}
 
export default User;