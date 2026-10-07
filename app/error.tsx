'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="survey-shell"><section className="login-panel"><h1>Something went wrong.</h1><p>Please try again. Any draft saved in this browser tab will still be here.</p><button className="primary" onClick={reset}>Try again</button></section></main>}
