
const footerStyle = {
    background: '#79647D',
    padding: 10,
    width: '100%'
}

const listStyle = {
    display: 'inline-block',
    textAlign: 'center',
    paddingRight: '10px',
    paddingLeft: '10px'
  }

const Footer = () => (
    <div style={footerStyle}>
        <ul style={{ textAlign: 'center' }}>
            <li style={listStyle}><a href="mailto:haneya.khan@utdallas.edu"><img src="../static/mail.svg" width="30" hight="30"></img></a></li>
            <li style={listStyle}><a href="https://www.linkedin.com/in/haneya-khan/"><img src="../static/linkedin.svg" width="30" hight="30"></img></a></li>
            <li style={listStyle}><a href="https://github.com/haneyakhan2249"><img src="../static/github.svg" width="30" hight="30"></img></a></li>
        </ul>
    </div>
)

export default Footer