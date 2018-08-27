/** Contact page. */

import Header from '../components/Header'

const headingStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    color: 'black'
 } 

const textStyle = {
    textAlign: 'justify',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontSize: '20px',
    color: 'black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
 }

const listStyle = {
    display: 'inline',
    paddingRight: '20px',
    paddingLeft: '20px'
  }

const Contact = () => (
    <div>

        <Header></Header>

        <div id='name' style={textStyle}>
            <h3 style={headingStyle}>REACH OUT TO ME!</h3>
            <p>
                I'm looking for a job for after graduation (May 2019) and would love to here from you!
                <br/>
                <div>
                    <ul style={{ textAlign: 'center' }}>
                        <li style={listStyle}><a href="mailto:haneya.khan@utdallas.edu"><img src="../static/mail.svg" width="30" hight="30"></img></a></li>
                        <li style={listStyle}><a href="https://www.linkedin.com/in/haneya-khan/"><img src="../static/linkedin.svg" width="30" hight="30"></img></a></li>
                        <li style={listStyle}><a href="https://github.com/haneyakhan2249"><img src="../static/github.svg" width="30" hight="30"></img></a></li>
                    </ul>
                </div>
            </p>
        </div>
    
    </div>
  )
  
  export default Contact