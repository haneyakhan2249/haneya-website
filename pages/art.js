import Link from 'next/link';
import p5 from 'p5';

class Art extends React.Component {

    constructor(props) {
      super(props)
      this.myRef = React.createRef()
    }
  
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
      }

    Sketch = (p) => {
  
       p.setup = () => {
        p.createCanvas(1000, 1000);
       }
  
       p.draw = () => {

        if (p.mouseIsPressed) {
            p.fill(200);
          } else {
            p.fill(255);
          }
          p.ellipse(p.mouseX, p.mouseY, 10, 10);
       }
    }
  
  
    render() {
      return (
        <div>
        <h1>hello, i'm haneya khan</h1>
        <p>work in progress :)</p>
        <div ref={this.myRef}>
            {/* <Link href='index'><a>go back!</a></Link> */}
        </div>
        <style jsx>{`

                    @font-face {
                        font-family: 'Raleway';
                            src: url('/fonts/Raleway-Medium.ttf');
                    }

                    #content {
                        width: 100%;
                        position: absolute;
                        left: 20;
                        right: 20;
                        top: 30%;
                        bottom: 20;
                        margin: auto;

                        /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/
                        max-width: 100%;
                        max-height: 100%;
                        overflow: auto;
                    }

                    h1 {
                        color: black;
                        font-family: 'Raleway', sans-serif;
                        font-size: 50px;
                        text-align: center;
                    }

                    p {
                        color: black;
                        font-family: 'Raleway', sans-serif;
                        font-size: 20px;
                        text-align: center;
                    }

                    a {
                        color: black;
                        font-family: 'Raleway', sans-serif;
                        font-size: 20px;
                        text-align: center;
                    }

                    Link {
                        text-align: center;
                    }
                    

                    `}</style>
        </div>
      )
    }

  }

  export default Art