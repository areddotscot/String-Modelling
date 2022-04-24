/*
 *
 */

import { DOMInstrument } from "./DOMInstrument";
import { ModelledInstrument } from "./ModelledInstrument";
import { ModelledString } from "./ModelledString";
import { bb } from "billboard.js";

declare global {
    interface Window { tsst : DOMInstrument }
}

(function ( window ) {

    if (typeof window.document === "undefined") throw new Error ("Are you running this in node?\nTry a browser instead");

    let stringAmount = 4;

    let stringList = (function () {
        let strings = [];
        for ( let i = 0; i < stringAmount; i++ ) {
            strings.push(new ModelledString( "0.7m" ));
        }
        return strings;
    }());

    let tsst = window.tsst = new DOMInstrument(stringList);

    tsst.strum();

    // testing the linegraph of the 'generated' wave

    var constraint = 100;
    var arr = [];

    var y = function (time = 0.0, amp = 0.5, freq = 1, phi = 0.0): number {
        return amp * Math.sin(2*Math.PI*freq*time + phi);
    }

    var time = 0.0;

    for ( var sample = 1, sampleR = 3, time = 0.0, deltaTime = 1/sampleR; sample < sampleR; sample++) {
        var value = y(time);
        arr.push(value);
        time += deltaTime;
    }

    arr.unshift("wave");

    console.log(arr)

    bb.generate({
        bindto: "#graph",
        data: { 
            type: "area-spline",
            columns: [
                arr
            ],
            colors : {
                wave : "red"
            }
        },
    });

}( globalThis ));