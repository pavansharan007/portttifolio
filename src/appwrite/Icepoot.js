import { Client,Databases,ID } from "appwrite";

export class services{
    client = new Client()
        constructor(){
            this.client
                .setEndpoint('https://fra.cloud.appwrite.io/v1')
                .setProject('6880ead7003795504241');
            this.databases = new Databases(this.client);
        }

        async createData({name,email,phone,msg}){
            try {
                return await  this.databases.createDocument(
                '689a20fd001167cdcc65',
                '689a21060004bd2d178c',
                ID.unique(),
                {
                    name,
                    email,
                    phone,
                    msg
                }
            )
            } catch (error) {
                console.log(error)
            }
        }
}
const Icepooting =new services();
export default Icepooting;