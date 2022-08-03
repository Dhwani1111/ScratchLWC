import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    //userId is 0056D000003F7a6QAC
    userDetail
    //wire as an adapter
    // @wire(adapter,{adapterConfig})
    // property or function
    @wire(getRecord, {recordId:'$userId', fields})
    
    //wire as a function
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }
    //wire as a method
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailProperty
}