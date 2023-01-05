import { Form, redirect, useActionData } from 'react-router-dom';

const Contact = () => {
    const data = useActionData();
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method='post' action='/help/contact'>
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div >
    );
};

export default Contact;



export const contactAction = async ({ request }) => {
    console.log(request);
    const data = await request.formData();
    const submission = { //object
        email: data.get('email'), //name attribute of forms and get the value
        message: data.get('message')//name attribute of forms and get the value
    };


    console.log(submission);

    //send post request
    if (submission.message.length < 10) {
        return { error: 'Message must be over 10 chars long' };
    }
    // redirect the user
    return redirect('/');
};