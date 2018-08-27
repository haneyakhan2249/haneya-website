/** Main page. */

import Links from '../components/Links'

 const textStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontSize: '50px',
    color: '#cc0000',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
 }

const Index = () => (
    <div>

        <Links></Links>

        <div id='name' style={textStyle}>
            <h1>hello, i'm haneya khan.</h1>
        </div>
        
    </div>
  )
  
  export default Index