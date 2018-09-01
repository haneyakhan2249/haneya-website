/** Contact page. */

import Header from '../components/Header'
import Links from '../components/Links'

const headingStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    color: '#cc0000'
 } 

 const panelStyle = {
    textAlign: 'justify',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontSize: '20px',
    width: '60%',
    margin: 'auto'
 }
 

const listStyle = {
    display: 'inline',
    paddingRight: '20px',
    paddingLeft: '20px'
  }

const Contact = () => (
    <div>
        
        <Links></Links>

        <div id='name' style={panelStyle}>
            <br/>
            <h3 style={headingStyle}>REACH OUT TO ME!</h3>
            <br/>
            <p>
                I am seeking challenging career oppotunities for after graduation (May 2019), and would love to hear from you!
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