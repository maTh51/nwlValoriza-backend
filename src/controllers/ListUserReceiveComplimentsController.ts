import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService"; 

class ListUserReceiveComplimentsController {
    
    async handle( request : Request, response : Response) {
        
        const { user_id } = request;
        
        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const list = await listUserReceiveComplimentsService.execute(user_id);

        return response.json(list);
    }
}

export { ListUserReceiveComplimentsController }