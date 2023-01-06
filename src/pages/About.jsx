import { useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';


const About = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const [user, setUser] = useState('pr');

    if (!user) {
        return <Navigate to='/' />;
    }

    return (
        <div className="about">
            {name && <p>Hi, {name}!</p>}
            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>

            <button onClick={() => setUser(null)} >Logout</button>
        </div>
    );
};

export default About;