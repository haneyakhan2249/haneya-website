import Block from '../components/Block'

const headingStyle = {
    'padding': 0,
    'textAlign': 'center',
    'fontFamily': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    'color': '#79647D'
    }

const textStyle = {
    'padding': 0,
    'textAlign': 'center',
    'fontFamily': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    'color': 'black'
    }

const listStyle = {
    'display': 'inline-block',
    'textAlign': 'center',
    'padding-right': '10px',
    'padding-left': '10px'
  }

const center = {
    'textAlign': 'center'
  }

const Index = () => (
    <div>
        <Block>
            <h1 style={textStyle}>hi, i'm haneya khan.</h1>
            <br></br>
            <p style={center}><img src='../static/haneya.svg' align='middle' width="300" height="300"></img></p>
        </Block>

        <br></br>
        <br></br>

        <h3 style={headingStyle}>about me:</h3>
        <p style={textStyle}>I'm a developer interested in data engineering, DevOps, fintech, and more!</p>
        <p style={textStyle}>Currently, I'm a senior at at The University of Texas at Dallas set to graduate in May 2019 with a computer science degree and a minor in finance.</p>
        
        <br></br>
        <br></br>

        <h3 style={headingStyle}>projects / work:</h3>
        <p style={textStyle}>IBM Extreme Blue Intern (2018)</p>
        <p style={textStyle}>Oracle Cloud Development Intern (2017)</p>
        <p style={textStyle}>UTD Big Data Analytics and Management Lab Research Intern (2015-2018)</p>

        <br></br>
        <br></br>
        
        <Block>
        <ul style={center}>
            <li style={listStyle}><a href="mailto:haneya.khan@utdallas.edu"><img src="../static/mail.svg" width="30" hight="30"></img></a></li>
            <li style={listStyle}><a href="https://www.linkedin.com/in/haneya-khan/"><img src="../static/linkedin.svg" width="30" hight="30"></img></a></li>
            <li style={listStyle}><a href="https://github.com/haneyakhan2249"><img src="../static/github.svg" width="30" hight="30"></img></a></li>
        </ul>
        </Block>

        <style jsx global>{`
            body{
                background: white
            }
        `}</style>
        
    </div>
  )
  
  export default Index