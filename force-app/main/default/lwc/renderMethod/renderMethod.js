import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signUp.html'
import renderTemplate from './renderMethod.html'

export default class RenderMethod extends LightningElement {

    selectedbtn = ''
    render(){
        return this.selectedbtn === 'Signup' ? signupTemplate :
        this.selectedbtn === 'Signin' ? signinTemplate :
       renderTemplate
    }

    handleClick(event){
        this.selectedbtn = event.target.label 
    }

    submit(event){
        console.log(`${event.target.label} successfully!!!`)
    }
}