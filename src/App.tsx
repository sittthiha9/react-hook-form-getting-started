import {useForm} from "react-hook-form";

function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}} = useForm({
        defaultValues: {
            firstName: "",
            lastName: ""
        }
    });

    const firstName = watch("firstName")
    return (
        <div className="App">
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <p>{firstName}</p>
                <input {...register("firstName",
                    {
                        required: "This is required",
                        minLength: {
                            value: 4,
                            message: "Minimum length is 4"
                        }
                    })}
                       placeholder={"First Name"}>
                </input>
                <p>{errors.firstName?.message}</p>
                <input {...register("lastName", {
                    required: "This is required"
                })
                       }
                       placeholder={"Last Name"}>
                </input>
                <p>{errors.lastName?.message}</p>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

export default App
