import {ID, Client, Account} from 'appwrite'
import conf from '../conf/conf';

export class Authservice {
      client= new Client();
      account;

      constructor(){
          this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId)

            this.account = new Account(this.client)
      }


      async createAccount({email, password, name}){
        try {
          const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                // the place for the login...means when a person create acc login it
                return await this.loginAccount({email ,password})
            } else {
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
      }


      async loginAccount({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.error(error);
             return null; 
        }
      }

     
      async getCurrentUser(){
        try {
          return  await this.account.get();
        } catch (error) {
            console.error(error);
        }
      }


      async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error(error);
            
        }
      }
}

const authservice= new Authservice();

export default authservice;