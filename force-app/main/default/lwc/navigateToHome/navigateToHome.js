import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToHome extends NavigationMixin(LightningElement) {

    //type:namedpage
    navigateToHome(){
        this[NavigationMixin.Navigate](
            {
                type:'standard__namedPage',
                attributes:{
                    pageName:'home'
                }
            }
        )
    }

    navigateToChatter(){
        this[NavigationMixin.Navigate](
            {
                type:'standard__namedPage',
                attributes:{
                    pageName:'chatter'
                }
            }
        )
    }

    //type:objectpage
    navigateToNewRecord(){
        this[NavigationMixin.Navigate](
            {
                type:'standard__objectPage',
                attributes:{
                  objectApiName:'Contact',
                  actionName:'new'
                }
            }
        )
    }

    navigateToNewRecordWithDefault(){
        const defaultValue = encodeDefaultFieldValues({ 
           
            LastName:'Test',
            Phone:1234567890,
            Title:'Sample',
            MobilePhone:458796741
            // LeadSource:'Other'
        }) 
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{ 
                defaultFieldValues: defaultValue
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{ 
                filterName:'Recent'           
             }
        })
    }

    navigateToFile(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }

    //type:Record Page
    recordViewMode(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordPage',
            attributes:{ 
                recordId:'0036D00000StaZeQAJ',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    recordEditMode(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordPage',
            attributes:{ 
                recordId:'0036D00000StaZeQAJ',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    }

    //type: Navigation Item page
    navigateToTab(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__navItemPage',
            attributes:{ 
                apiName:'Design_App'
            }
        })
    }
    
    //type: Record Relationship page
    navigateToRelatedList(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordRelationshipPage',
            attributes:{ 
                recordId:'0016D00000d9KaOQAU',
                objectApiName:'Account',
                relationshipApiName:'Contacts', 
                actionName:'view'
            }
        })
    }

    navigateToWebPage(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__webPage',
            attributes:{ 
               url:'https://trailhead.salesforce.com/en/content/learn/trails/force_com_admin_beginner'
            }
        })
    }
}

