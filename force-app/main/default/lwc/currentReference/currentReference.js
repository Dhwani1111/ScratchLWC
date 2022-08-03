import { LightningElement, wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
export default class CurrentReference extends LightningElement {
    @wire(CurrentPageReference)
    PageRef

    get PageReference(){
        return this.PageRef ? JSON.stringify(this.PageRef,null,2) : '';
    }
}