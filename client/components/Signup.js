
const Signup = () => {
    return(
        <>
        <div className="container content-center">
            <div className="signup">
                <div className="signup-header text-center">
                    <h2>Sign Up</h2>
                    <p>Enter your details below & free sign up</p>
                </div>
                <div className="signup-form">
                    <div className="form-group">
                        <label for="email">Your Email</label>
                        <input type="email" className="form-control br-10" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control br-10" id="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-register br-10">Create account</button>
                    <div className="form-group checkbox">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label fs-14 pl-10 color-text3">
                            By creating an account you have to agree  with our them & condication.
                        </label>
                    </div>
                    <p className="fs-14 mt-20 color-text3">Already have an account?</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup;