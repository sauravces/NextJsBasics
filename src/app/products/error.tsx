"use client"
export default function ErrorBoundry({error,reset}:{
    error:Error,
    reset:()=>void
}){
    return <>
    <div>
    {error.message}
    </div>
    <button onClick={reset}>Try Again</button>
    </>
}