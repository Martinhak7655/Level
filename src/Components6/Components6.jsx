import React from 'react'
import "./Components6.css"

const Components6 = () => {
    return (
        <div>
            <div className='asia'>
                <div className='asia-flex'>
                    <div>
                        <h1>Asia</h1>
                        <h1 style={{ color: "red" }}>Singapore</h1>
                    </div>
                    <div className='asia-div'>
                        <div className='asia-flex'>
                            <div className='asia-img'></div>
                            <div className='asia-column'>
                                <h3 style={{ color: "red" }}>Suspendisse vel est libero sem phasellus ac laoreet</h3>
                                <p>Vivamus eget tellus ornare, sollicitudin quam id, dictum nulla. Phasellus finibus rhoncus justo, tempus eleifend neque dictum ac. Aenean metus leo, consectetur non. </p>
                                <p>Etiam aliquam arcu at mauris consectetur scelerisque. Integer elementum justo in orci facilisis ultricies. Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida.</p>
                            </div>
                        </div>
                        <div className='asia-flex'>
                            <div className='asia-img2'></div>
                            <div className='asia-column'>
                                <h3>Suspendisse vel est libero sem phasellus ac laoreet</h3>
                                <p>Duis accumsan sagittis tortor in ultrices. Praesent tortor ante, fringilla ac nibh porttitor, fermentum commodo nulla. </p>
                                <h3 style={{ color: "red" }}>CONTINUE READING</h3>
                            </div>
                        </div>
                        <div className='asia-flex'>
                            <div className='asia-img3'></div>
                            <div className='asia-column'>
                                <h3>Faucibus dolor ligula nisl metus auctor aliquet</h3>
                                <p>Nunc in felis aliquet metus luctus iaculis vel et nisi. Nulla venenatis nisl orci, laoreet ultricies massa tristique id. </p>
                                <h3 style={{ color: "red" }}>CONTINUE READING</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Components6
