
const blockStyle = {
  background: '#79647D',
  padding: 50
}

const Block = (props) => (
    <div style={blockStyle}>
        {props.children}
    </div>
)

export default Block