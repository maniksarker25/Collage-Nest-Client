
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/error/error.png'

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className='mx-auto max-w-screen-xl mt-24 text-center  '>
            <img className='mx-auto w-[800px] h-[400px] ' src={errorImage} alt="" />
            <h1 className='text-center text-2xl text-primary'>{error.error.message}</h1>
            <Link to='/'><button className="primary-btn mt-12">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;