/** Header component. */

 const nameStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    color: '#cc0000',
    padding: 10
 }


const Header = () => (
    <div id='name'>
        <head>
            <title>Haneya Khan</title>
        </head>
        <a href='/' style={{textDecoration: 'none'}}><h1 style={nameStyle}>haneya khan</h1></a>
    </div>
)

export default Header