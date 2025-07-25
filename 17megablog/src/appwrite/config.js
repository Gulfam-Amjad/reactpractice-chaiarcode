import conf from "../conf/conf";
import { Client, Account, ID, Query, Databases, Storage } from "appwrite";

export class Services {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectId);

        this.databases= new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
   
    async createPost({title, slug, content, featuredimage, status, userid}){
       try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
        slug,
        {
            title,
            slug,
            content,
            featuredimage,
            status,
            userid,
        }
        )
        
       } catch (error) {
          console.error(error);
       }
    }


    async updatePost(slug, {title, content, featuredimage, status}){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredimage,
                        status,
                    }
                )
            } catch (error) {
                console.error(error);
            }
    }


    async deletePost(slug){
         try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
         } catch (error) {
            console.error(error);
            return false
         }
    }


    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
         } catch (error) {
            console.error(error);
         }
    }
    

    async getPosts(queries= [Query.equal("status", "active")]){
         try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            ) 
         } catch (error) {
            console.error(error);
         }
    }

    // file upload code is here

    async fileUpload(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.error(error);
        }
    }


   async fileDelete(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.error(error);
        }
    }

    async filePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId, 
            fileId,
        )
    }

}


const services = new Services()

export default services;