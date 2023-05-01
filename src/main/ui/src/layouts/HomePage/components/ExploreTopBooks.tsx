import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
    return (
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white 
                d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find Your Next Adventure - Where would you like to go next?</h1>
                    <p className='col-md-8 fs-4'>
                      </p>
                    <p className='col-md-8 fs-4'>
                    <p className='col-md-8 fs-4'>  For Sign In</p>
                    <p>User ID: testuser@email.com </p>
                    <p> Password : Application1  </p>
                    </p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/search'>
                        Explore top books</Link>
                </div>
            </div>
        </div>
    );
}