/** Links component w/ page links. */

const panelStyle = {
    width: '70%',
    margin: 'auto',
}

 const linkStyle = {
    textAlign: 'center',
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    paddingTop: 10,
    paddingBottom: 10
 }

 const listStyle = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between'
 }

 const linkTextStyle = {
    textDecoration: 'none', 
    color: 'black',
    fontSize: '15px'
 }

 const elemStyle = {
    display: 'block',
    flex: '0 1 100%',
    listStyleType: 'none'
 }

const Links = () => (

    <div id='link bar' style={panelStyle}>

        <head>
            <title>Haneya Khan</title>
        </head>

        <div id='links' style={linkStyle}>
            <ul style={listStyle}>
                <li style={elemStyle}><a href='/index' style={linkTextStyle}>HOME</a></li>
                <li style={elemStyle}><a href='/about' style={linkTextStyle}>ABOUT</a></li>
                <li style={elemStyle}><a href='/education' style={linkTextStyle}>EDUCATION</a></li>
                <li style={elemStyle}><a href='/work' style={linkTextStyle}>WORK</a></li>
                <li style={elemStyle}><a href='/activities' style={linkTextStyle}>ACTIVITIES</a></li>
                <li style={elemStyle}><a href='/contact' style={linkTextStyle}>CONTACT</a></li>
            </ul>
            <hr/>
        </div>
        
    </div>
)

export default Links