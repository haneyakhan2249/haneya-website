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

const Activities= () => (
    <div>

        <Header></Header>

        <div id='name' style={textStyle}>
        <h3 style={headingStyle}>ACTIVITIES</h3>
            <p>
                Outside of school and internships, I'm involved in a few different organizations and activities.
                <br/>
                <br/>
                <b>Tutor, ICNA (March 2018 - current)</b>
                <br/>
                Tutor refugee students (elementary school, middle school, high school, college) in the DFW area.
                <br/>
                <br/>
                <b style={{color: 'black'}}>Teaching Intern, UT Dallas (Fall 2017)</b>
                <br/>
                Assist with teaching an intro engineering/computer science class.
                <br/>
                <br/>
                <b style={{color: 'black'}}>Speakers Club, President (2015 - 2018)</b>
                <br/>
                A volunteer speech and debate program for children ages 8-12.  
                <br/>
                <br/>
                <b style={{color: 'black'}}>Tai Kwon Do, Black Belt (2005 - 2015)</b>     
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
  
  export default Activities