import { ParseUnit } from "./lib/ParseUnits";

class ModelledString {

    public length : ModelledStringLength;

    constructor ( length : string ) {

        this.length = ParseUnit(length);

    }

    private render () : ModelledStringWaveRender {

        return {};

    }

    private renderToFile () {
        return typeof process === "undefined" ? this.renderToFile$Browser() : this.renderToFile$Node();
    }

    protected renderToFile$Node () {

    }

    protected renderToFile$Browser () {
        throw new Error ("Are you running this in a browser? We don't support that yet!");
    }

    public play ( tensileForce : number = 1 ) : void {

        console.log("CREATING A WAVE");

        let waveRender = this.render();

    }

}

export { ModelledString }