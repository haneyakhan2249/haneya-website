/** About page. */

import Header from '../components/Header'

const headingStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
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

const Work = () => (
    <div>

        <Header></Header>

        <div id='name' style={textStyle}>
        <h3 style={headingStyle}>INTERNSHIPS AND RESEARCH</h3>
            <p>
                I’ve spent the past few years exploring different fields and technologies.
                <br/>
                <br/>
                <b>IBM Extreme Blue Intern (2018)</b>
                <br/>
                At IBM, I designed and developed a visualization application that extracts data from collaboration tools to show how people work. I led <a>DevOps engineering</a> within the team and worked on <a>data ingestion and extraction</a> problems. From start to finish, this project included user interviews and mockups for product design, data ingestion and integration, data visualization, managing continuous integration and deployment, and finally, a product pitch!
                <br/>
                <b>Technologies I worked with:</b> <a>Python, React, Docker, Travis CI, Kubernetes, etc</a>.
                <br/>
                <br/>
                <b style={{color: 'black'}}>Oracle Cloud Development Co-op (2017)</b>
                <br/> 
                At Oracle, I <a>designed, developed, and supported multiple cloud environments</a>. This included everything from setting up physical servers to <a>automating cloud provisioning and deployment</a>, and finally, to adding enhancements based on customers changing requirements. 
                <br/>
                <b>Technologies I worked with:</b> <a>OpenStack, Ansible, Terraform, Python, Bash Scripts, Docker, Kubernetes, SQL, etc</a>.
                <br/>
                <br/>
                <b style={{color: 'black'}}>UTD Big Data Lab Research Intern (2015-2018)</b>
                <br/>
                Since my freshman year, I have done research in a lab where I have worked on <a>cybersecurity, website fingerprinting, and data analytics projects</a>. In doing so, I utilized a variety of <a>data mining and machine learning techniques and libraries</a>. I also <a>wrote and presented a paper</a> at the UTD CS Research Expo <a>on Closed World Website Fingerprinting </a>(a mechanism to identify encrypted traffic using machine learning techniques).
                <br/>
                <b>Technologies I worked with:</b> <a>Python (scripting, sci-kit learn), Bash Scripts, Java, HTML/CSS, C/C++, SQL, etc</a>. 
                <br/>
                <br/>
            </p>
        </div>

        <style jsx global>{`
            a {
                color: #cc0000
            }
        `}</style>
        
    </div>
  )
  
  export default Work