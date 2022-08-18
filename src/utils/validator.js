const validator = {
  contactForm: (values) => {
    let errors = {};

    if (!values.name.trim()) errors.name = "Name cannot be empty";

    if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Email address is invalid";
    if (!values.email) errors.email = "Email cannot be empty";

    if(values.message.length < 30 ) errors.message = "Message is too short";
    if (!values.message) errors.message = "Message cannot be empty";

    return errors;
  }
}

export default validator;