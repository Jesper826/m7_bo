import './cookie.css'

export function Cookie(){
    let score = 0;
    function scoreUp(){
        score++;
    }
    return (
        <section className="Cookie">
            <h1>Cookie clicker</h1>
            <p>Click the cookie to earn points!</p>
            <div>Score: {score}</div>
                <button onClick={scoreUp}>Click me!</button>
                
        </section>
    )
}