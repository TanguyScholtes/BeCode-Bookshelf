/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";

export default class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>{"Hello, Morld!"}</h1>
                <hr />
                <small>{"becode/bookshelf"}</small>
            </div>
        );
    }
}
