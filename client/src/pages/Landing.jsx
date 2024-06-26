import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';



const Landing = () => {
  return (
  
    <Wrapper>
      <nav>
        <h2>logo here</h2>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            App <span>for</span > Dating
          </h1>
          <p>
            Find right partner level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to='/api/auth/google' className='btn register-link'>
            Sign Up with Google 
          </Link>
          <Link to='/login' className='btn '>
            Login
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
    
  )
}

export default Landing

// src/page/Landing.jsx
// import React from 'react';
// import {
//   Container,
//   Header,
//   Logo,
//   Nav,
//   NavLink,
//   Main,
//   Title,
//   Highlight,
//   Subtitle,
//   UserCard,
//   UserInfo,
//   UserName,
//   UserLocation,
//   SayHiButton,
// } from '../assets/wrappers/LandingPage.js';

// const Landing = () => {
//   return (
//     <Container>
//       <Header>
//         <Logo>Match Maker</Logo>
//         <Nav>
//           <NavLink href="#">Home</NavLink>
//           <NavLink href="#">Features</NavLink>
//           <NavLink href="#">Contact</NavLink>
//           <NavLink href="#">Login</NavLink>
//           <NavLink href="#">Sign Up</NavLink>
//         </Nav>
//       </Header>
//       <Main>
//         <Title>
//           Find your love <br />
//           BY being <Highlight>Yourself</Highlight>
//         </Title>
//         <Subtitle>
//           we designed a platform for people of lover to find their love without
//           being judged
//         </Subtitle>
//         <UserCard>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="User"
//             width="80"
//             height="80"
//             style={{ borderRadius: '50%' }}
//           />
//           <UserInfo>
//             <UserName>Johan Carter</UserName>
//             <UserLocation>New York, Near 2.1 miles</UserLocation>
//             <SayHiButton>Say Hi</SayHiButton>
//           </UserInfo>
//         </UserCard>
//       </Main>
//     </Container>
//   );
// };

// export default Landing;
