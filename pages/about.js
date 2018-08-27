/** About page. */

import Header from '../components/Header'

const headingStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
 } 

const textStyle = {
    textAlign: 'justify',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontSize: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
 }

const About = () => (
    <div>

        <Header></Header>

        <div id='name' style={textStyle}>
            <h3 style={headingStyle}>A LITTLE ABOUT ME</h3>
            <p>
                I am a <a>computer scientist</a> passionate about <a>finding solutions to complex, real world challenges</a> using <a>data science and analytics, FinTech, DevOps, and more</a>!
                <br/>
                <br/>
                This motivates me to <a>continuously learn new technologies and adopt new skill sets</a>. I believe that continuous learning, along with user/market centered product design, good development practices, and effective deployment pipelines, creates the perfect avenue for innovation!
                <br/>
                <br/>
                I am currently a senior at the <a>University of Texas at Dallas</a> graduating in <a>May 2019</a> with a major in <a>computer science and a minor in finance</a>. 

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