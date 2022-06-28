import { FcGoogle } from "react-icons/fc";
const Signin = () => {
    let iconStyle = {fontSize: "30px"}
    return(
        <>
            <div className="container content-center">
                <div className="signin">
                <div className="signup-header text-center">
                    <h2>Log In</h2>
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
                    <p className="color-text-3 mt-20">Forget password?</p>
                    <button type="submit" className="btn btn-primary btn-register br-10">Log In</button>
                    
                    <p className="text-center fs-14 mt-20 color-text3">Don't have an account? Sign up</p>
                    <p className="text-center color-text3">Or login with</p>
                    <FcGoogle className="text-center" style={iconStyle}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default Signin;