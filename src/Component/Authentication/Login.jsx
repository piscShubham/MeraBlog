import { useMutation } from 'react-query';

// imgage
import apple from '../Assests/apple.svg';
import google_s from '../Assests/google_s.svg';
import greenwall from '../Assests/greenwall.svg';
import group from '../Assests/group.svg';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {

  // import state
  const [email, setEmailAddress] = useState();
  const [password_hash, setCreatePassword] = useState();
  const [term, setTerm] = useState(true);

  // login funtion
  async function loginUser() {
    if (term === true) {
      alert("please read term and condition");
    }

    try{

    
    let responce = await fetch('http://localhost:8082/login', {
      method: "POST",
      body: JSON.stringify({ email, password_hash }),
      headers: {
        'Content-type': 'application/json'
      },
    })
    responce = await responce.json();
    console.log(responce);
    if (!responce.ok) {
      throw new Error('Login failed'); // Throw an error if response is not successful
    }
    // if (responce) {
    //   localStorage.setItem('token', JSON.stringify(responce.token));
    //   localStorage.setItem('email',JSON.stringify(email));
    //   // Navigate('/')
     
    // }
   
  }
  catch (error) {
    // Handle error
    console.error('Login error:', error.message);
    // Display error message to the user (e.g., show a toast, display an error message on the UI, etc.)
    alert('Login failed. Please try again.');
  }
  }

 
  

  // Term's& condition
  function handleterm() {
    setTerm(!term);
    console.log(term)
  }


  // mutaion function
  const mutation = useMutation(loginUser, {
    onSuccess: (response) => {
      if (response.success) {
        console.log('Login successful');
        // Additional actions for successful login
      } else {
        console.log('Login failed');
        // Additional actions for failed login (if needed)
      }
    },
    onError: (error) => {
      console.error('Login error:', error);
      // You can optionally display a more user-friendly error message here if needed
    },
  });


  const handleLogin = () => {
    mutation.mutate();
  };

  //  userprofile

  






  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>

      <main className='flex flex-col items-center justify-center w-full flex-1    text-center'  >

        <div className='bg-white  shadow-xl flex w-2/3 max-w-4xl   py-32 px-28  ' style={{ borderRadius: "35px" }}>

          <div className='w-2/5 h-4/5       rounded-br-2xl    ' style={{ marginLeft: "-71px" }}>
            <div className=' mt-0  ' >
              <img src={greenwall} style={{ position: "absolute", top: "75px", width: "110px" }} />
            </div>
            <div className=' mb-10'>

              <div className='flex  h-6 mb-2'>
                <h1 className='' style={{ fontSize: "20px", color: '#AEADAD' }}>Welcome to,<spna className=' text-green-500'>Greenwall</spna></h1>
              </div>
              <div className=' ' style={{ color: '#777777' }}>
                <p className=' text-sm  text-gray-400 flex'>Sign up for best culture </p>
                <p className=' text-sm text-gray-400 flex'>program  <span className=' text-green-500  w-8 px-8 h-1  bg-green-300 mt-3 ml-2   rounded-2xl'>-</span></p>

              </div>
            </div>

            {/* group photo */}
            <div>
              <img src={group} />
            </div>
          </div>


          {/* Sign up */}

          <div className='w-3/5 h-4/5 text-white rounded-tr-2xl rounded-br-2xl  py-26 ' style={{ paddingLeft: "77px", marginTop: "-46px" }}>
            <h1 className='   text-black   text-left  ml-14 mb-5 ' style={{ color: "#666666", fontSize: "26px", fontWeight: "600" }} >Log In</h1>



            {/* Email */}
            <div className='  px-3  py-2  flex-row-reverse  ' style={{ marginRight: "40px" }} >
              <label
                className="block font-inter font-medium  text-base leading-6  flex  mb-1   ml-12 " style={{ color: "#848080", fontWeight: "500" }}
              >
                Email Address
              </label>
              <input
                type='text'
                className='h-58 top-378  ml-8  pl-2 rounded-sm border border-gray-300 ' placeholder='Enter your email address '
                style={{ width: "408px", height: "37px", borderRadius: "8px", color: "black", marginLeft: "45px" }}
                onChange={(e) => setEmailAddress(e.target.value)} value={email} />
            </div>

            {/* password */}
            <div className=' rounded-2xl  flex  py-2 '>
              <div className='ml-14'>
                <label className='  text-gray-500 flex mb-1' style={{ color: "#848080", fontWeight: "500" }}>Create Password</label>
                <input
                  type='password'
                  className='h-58 top-378   pl-2 rounded-sm border border-gray-300 ' placeholder='Enter 8 digit include'
                  style={{ width: "408px", height: "37px", borderRadius: "8px", color: "black" }}
                  onChange={(e) => setCreatePassword(e.target.value)} value={password_hash} />   </div>
            </div>


            {/* terms& condition */}

            <div className='flex  py-2 ' style={{ marginLeft: "48px", marginTop: "9px", width: "412px" }} >
              <input type='checkbox' value={term} onChange={handleterm} style={{ width: "41px" }} />
              <label className='  text-gray-600  text-sm  flex' > I Agree to the <span style={{ textDecoration: "underline", marginLeft: "3px" }}>Terms & Privacy</span> </label>
              <p className=' flex ml-14' style={{ color: "#656363", fontWeight: "500" }}>Forgot Password?</p>
            </div>

            {/* button */}
            <div className="  py-2 bg-green-500  rounded-2xl mt-4" style={{ width: "400px", borderRadius: "62px", marginLeft: "48px" }}>
              <button onClick={handleLogin} disabled={mutation.isLoading} > {mutation.isLoading ? 'Logging in...' : 'Login'}</button>
            </div>


            {/* or line */}
            <div className='flex py-2    ml-16' style={{ width: "512px" }}>
              <hr className='   bg-gray-100 mt-3 ' style={{ width: "180px", height: "0.5px" }} />
              <span style={{ color: "black" }}>or</span>  <hr className='   bg-gray-200 mt-3' style={{ width: "180px", height: "0.5px", color: "#DDDDDD" }} />
            </div>

            {/* continue with google and apple */}
            <div className='flex mt-1 ml-11' style={{ width: "512px", marginLeft: "66px" }}>
              <div className='    flex  rounded-lg border border-gray-300 ' style={{ width: "180px" }} >
                <img src={google_s} style={{ width: "30px", marginLeft: "4px" }} />
                <label className=' text-black  text-sm mt-2 mb-2'>Continue with Google</label>
              </div>
              <div className='    flex  rounded-lg border border-gray-300 ml-6   ' style={{ width: "180px" }} >
                <img src={apple} className='' style={{ width: "30px", marginLeft: "4px" }} />
                <label className=' text-black  text-sm mt-2 mb-2'>Continue with apple</label>
              </div>
            </div>

            {/* dont have account for register */}
            <div style={{ position: "absolute", button: "0px" }}>
              <p className='   mt-5   ml-32' style={{ color: "#767575" }}>Do not have an account?<Link to={'/signup'} style={{ color: "green" }}>Create Now</Link>  </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )

}