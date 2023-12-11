import * as yup from 'yup'




const loginValidation= yup.object({
    firstName:yup.string().required('Enter your first name here').matches(/^[a-zA-Z]+$/, 'Name must contain only letters'),
    lastName:yup.string().required('Enter your first name here').matches(/^[a-zA-Z]+$/, 'Name must contain only letters'),
    email:yup.string().required('Enter your email here').email('Please enter a valid email'),
    mobile:yup.string().required('Enter your mobile number here').test('is-ten-digits', 'Mobile must be 10 digits', val => val && val.length === 10),
    address1: yup.string().required('Enter your address here'),
    address2:yup.string().required('Enter your address line 2 here'),
    country:yup.string().required('Select your country'),
    state:yup.string().required('Select your state'),
    zipCode:yup.string().required('Select your zip code').test('is-six-digits', 'Zip code must be 6 digits', val => val && val.length === 6),
})

export default loginValidation