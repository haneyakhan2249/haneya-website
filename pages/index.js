/** Main page. */

import Links from '../components/Links'

 const textStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontSize: '50px',
    color: '#cc0000',
    width: '60%',
    margin: 'auto',
    padding: '150px'
 }

const Index = () => (
    <div>

        {/*<Links></Links>*/}

        <div id='name' style={textStyle}>
            <h1>hello, i'm haneya khan :)</h1>
        </div>
        
    </div>
  )
  
  export default Index