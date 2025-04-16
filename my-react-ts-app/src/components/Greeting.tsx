type GreetingProps = {
    name:string;
    age?:number; //optional chaining
}

const Greeting = ({name, age}: GreetingProps) =>{
    return(
        <div>
        <h2>Hello, {name}!</h2>
        {age && <p>you are {age} years old.</p>}
        </div>
    )
};

export default Greeting;