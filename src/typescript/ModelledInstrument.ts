import { ModelledString } from "./ModelledString";

class ModelledInstrument {

    public strings : ModelledString[];

    constructor ( Strings : ModelledString[] ) {

        this.strings = Strings;
        
    }

    public pick ( stringIndex : number, pattern? : number[] ) : void {
        return typeof pattern !== "undefined" && pattern.length >= 2 ? this.pickPattern(pattern) : this.pickSingle ( stringIndex );
    }

    protected pickPattern ( pattern : number[] ) : void {

    }

    protected pickSingle ( stringIndex : number ) : void {
        this.strings[stringIndex].play();
    }

    public strum ( startPosition : StrumPosition = "top" ) : void {
        var strumFromTo : ModelledString[] = this.strings;

        if ( startPosition === "bottom" ) strumFromTo = this.strings.reverse();

        for ( let strings in strumFromTo ) {
            strumFromTo[strings].play();
        }
    }

}

export { ModelledInstrument }