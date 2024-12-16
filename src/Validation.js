
const Validation = (values) => {
    let errors = {}

    if (!values.username){
        errors.username = "Name Required"
    }
    else if (values.username.length < 4) {
        errors.username = "Name must be more than 4 characters"
    }
    if (!values.password) {
        errors.username = "Password Required"
    }
    else if (values.username.length < 8) {
        errors.username = "Password must be more than 8 characters"
    }
}
export default Validation;