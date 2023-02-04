import {useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit, formState: {error}} = useForm();

    console.log(error);

    return (
        <div className="App">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit((data) => {
                console.log(data);
            })}>
                <input {...register("firstName",
                    {
                        required: "This is required",
                        minLength: {
                            value: 4,
                            message: "Minimum length is 4"
                        }
                    })}
                       placeholder={"First Name"}></input>
                <input {...register("lastName")} placeholder={"Last Name"}></input>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default App
