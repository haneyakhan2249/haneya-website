/* Main page */

const Index = () => (

    <div id='wrapper'>
        <div id='content'>

                <h1>hello, i'm haneya khan</h1>
                <p>work in progress :)</p>
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
                    

                    `}</style>

        </div>
    </div>

  )
  
  export default Index