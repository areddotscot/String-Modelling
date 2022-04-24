/*
 *
 */

import { ModelledString } from "./ModelledString";
import { ModelledBow } from "./ModelledBow";
import { ModelledBodyConvolver } from "./ModelledBody";
import { ModelledInstrument } from "./ModelledInstrument";
import { DOMInstrument } from "./DOMInstrument";

const Strings : number = 4;
const UsesBow : boolean = false;
const HasBody : boolean = false;

let StringList : ModelledString[] = (function () {
    let strings = [];
    for ( let i = 0; i < Strings; i++ ) {
        strings.push(new ModelledString( "0.7m" ));
    }
    return strings;
}());

/* DOM testing */

export { StringList }