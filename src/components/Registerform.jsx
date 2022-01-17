import React, {
    useState
} from 'react';

const inituser = {
    "Name": "",
    "Email": "",
    "Password": "",
    "Address": "",
    "Mobile": "",

}
export const Registeration = () => {

    const [form, setForm] = useState(inituser);

    const inputevent = (e) => {
        const {
            name,
            value
        } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        fetch("http://localhost:3001/users", {
            "method": "POST",
            body: JSON.stringify(form),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json()
        }).then((res) => {
           alert("registrattion successfull")
        }).catch((err) => {
            console.log(err)
        })



    }


    return ( <
        form onSubmit = {
            handleSubmit
        } >
        <
        label > Name < /label> <
        input type = "text"
        name = "Name"
        placeholder = " Enter Name"
        onChange = {
            inputevent
        }
        /> <
        label > Email < /label> <
        input type = "email"
        name = "Email"
        placeholder = " Enter email"
        onChange = {
            inputevent
        }
        /> <
        label > password < /label> <
        input type = "password"
        name = "Password"
        placeholder = " Enter password"
        onChange = {
            inputevent
        }
        /> <
        label > Mobile < /label> <
        input type = "number"
        name = "Mobile"
        placeholder = " Enter mobile"
        onChange = {
            inputevent
        }
        /> <
        label > Address < /label> <
        input type = "text"
        name = "Address"
        placeholder = " Enter Address"
        onChange = {
            inputevent
        }
        /> <
        input type = "submit"
        value = "SUBMIT" / >
        <
        /form>

    )
}