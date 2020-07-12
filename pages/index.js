/* Main page */

const Index = () => (

    <div id='wrapper'>
        <div id='content'>

                hello, i'm haneya khan

                <style jsx>{`

                    @font-face {
                        font-family: 'Raleway';
                            src: url('/fonts/Raleway-Medium.ttf');
                    }

                    #content {
                        width: 100%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 40%;
                        margin: auto;

                        /*Solves a problem in which the content is being cut when the div is smaller than its' wrapper:*/
                        max-width: 100%;
                        max-height: 100%;
                        overflow: auto;

                        color: green;
                        font-family: 'Raleway', sans-serif;
                        font-size: 50px;
                        text-align: center;
                }
                    

                    `}</style>

        </div>
    </div>

  )
  
  export default Index