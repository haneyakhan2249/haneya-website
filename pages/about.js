/** About page. */

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

const About = () => (
    <div>

        <Links></Links>

        <div id='name' style={panelStyle}>
            <br/>
            <h3 style={headingStyle}>A LITTLE ABOUT ME</h3>
            <br/>
            <p>
                I am a <a>computer scientist</a> passionate about <a>finding solutions to complex, real world problems</a> using <a>data science and analytics, FinTech, DevOps, and more</a>!
                <br/>
                <br/>
                I am motivated to <a>continuously learn evolving technologies and adopt new skill sets</a>, all while focusing on <a>user/market centric products and good development practices</a>. Combining my passion for computer science with my strong communication and presentation skills prepares me to exceed both company and customer expectations!
            </p>
        </div>

        <style jsx global>{`
            a {
                color: #cc0000;
            }
        `}</style>
        
    </div>
  )
  
  export default About