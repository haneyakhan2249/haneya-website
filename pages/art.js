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
        p.createCanvas(720, 400);
        p.background(255);
        p.noStroke();
       }
  
       p.draw = () => {

        p.background(255);

        let from = p.color(255, 0, 0, 0.2 * 255);
        let to = p.color(0, 0, 255, 0.2 * 255);
        let c1 = p.lerpColor(from, to, 0.33);
        let c2 = p.lerpColor(from, to, 0.66);

        for (let i = 0; i < 15; i++) {
            p.fill(from);
            p.quad(
                p.random(-40, 220), p.random(p.height),
                p.random(-40, 220), p.random(p.height),
                p.random(-40, 220), p.random(p.height),
                p.random(-40, 220), p.random(p.height)
            );
            p.fill(c1);
            p.quad(
                p.random(140, 380), p.random(p.height),
                p.random(140, 380), p.random(p.height),
                p.random(140, 380), p.random(p.height),
                p.random(140, 380), p.random(p.height)
            );
            p.fill(c2);
            p.quad(
                p.random(320, 580), p.random(p.height),
                p.random(320, 580), p.random(p.height),
                p.random(320, 580), p.random(p.height),
                p.random(320, 580), p.random(p.height)
            );
            p.fill(to);
            p.quad(
                p.random(500, 760), p.random(p.height),
                p.random(500, 760), p.random(p.height),
                p.random(500, 760), p.random(p.height),
                p.random(500, 760), p.random(p.height)
            );
        }
        p.frameRate(5);
    }
    }
  
  
    render() {
      return (
        <div>
        <div id='art' ref={this.myRef}>

        <h1>hello, i'm haneya khan</h1>
        <p>work in progress :)</p>
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


                    #art {
                        margin: auto;
                        border: 3px solid green;
                        padding: 10px;
                    }
                    

                    `}</style>
        </div>
      )
    }

  }

  export default Art