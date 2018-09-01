/** About page. */

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

const Education = () => (
    <div>

        <Links></Links>

        <div id='name' style={panelStyle}>
            <br/>
            <h3 style={headingStyle}>EDUCATION</h3>
            <br/>
            <p>
                I am currently a senior at the <a>University of Texas at Dallas</a> graduating in <a>May 2019</a> with a major in <a>computer science and a minor in finance</a>. 
                <br/>
                <br/>
                <a>Relevant Coursework:</a>
                <br/>
                Data Structures and Algorithm Analysis<br/>
                Advanced Algorithm Design and Analysis<br/>
                Computer Architecture<br/>
                Software Engineering<br/>
                Databases<br/>
                Machine Learning<br/>
                Data and Application Security<br/>
                Business Finance<br/>
                Intro to Financial Modeling<br/>
            </p>

        </div>

        <style jsx global>{`
            a {
                color: #cc0000;
            }
        `}</style>
        
    </div>
  )
  
  export default Education