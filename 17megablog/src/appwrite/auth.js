import {ID, client, account} from 'appwrite'
import conf from '../conf/conf';

export class Authservice {
      client= new client();
      account;

      constructor(){
          this.client()
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId)

            this.account = new account(this.client)
      }


      async createAccount({email, password, name}){
        try {
          const userAccont = await this.account.create(ID.unique(), email, password, name)

            if (userAccont) {
                // the place for the login...means when a person create acc login it
                this.loginAccont({email ,password})
            } else {
                console.error();
            }
        } catch (error) {
            console.error();
        }
      }


      async loginAccont({email, password}){
        try {
             await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error();
        }
      }

     
      async getCurrentUSer(){
        try {
            await this.account.get();
        } catch (error) {
            console.error();
        }
      }


      async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error();
            
        }
      }
}

const authservice= new Authservice();

export default authservice;