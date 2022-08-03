import { LightningElement } from 'lwc';

export default class DynamicCSS extends LightningElement {
    pr=10
    changeHandler(event){
        this.pr = event.target.value

    }
    get percentage(){
        return `width:${this.pr}%`
    }
}