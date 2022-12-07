import { useSession, signIn, signOut } from "next-auth/react"
const NotUser = () =>{
    const{data:session, status}=useSession()
    return(
        <>
        <h2>비유저 화면ㅎㅎ</h2>
            Not signed in <br />
            
            Status: {status}<br />
            <button onClick={() => signIn()}>Sign in</button>
    </>
    )
}
 
export default NotUser;