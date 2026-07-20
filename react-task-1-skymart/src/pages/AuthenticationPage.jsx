import Login from './Login';
import Register from './Register';

const AuthenticationPage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    return (
        <>
            {user ? <Login /> : <Register />}
        </>
    );
};

export default AuthenticationPage;




