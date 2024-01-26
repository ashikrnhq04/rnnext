import data from "../../data.js";
export default function taskReducers(draft, action) {
    switch (action.type) {
        case "create":
            draft.push(action.data);
            break;
        case "update":
           return draft.map(item => {
               if(item.id === action.data.id) {
                   return {...item, ...action.data}
               }
               return item;
           });
           case "favourite":
           draft.forEach(item => {
               if(item.id === action.id) {
                   return item.isFavourite = !item.isFavourite
               }
           });
           break;
        case "search":
            return draft = [...data].filter(item => item.title.toLowerCase().includes(action.data.toLowerCase()));
        case "noSearch":
            if(action.data === "") {
                return data;
            }
            break;
        case "delete":
            return draft.filter(item => {
                if(item.id !== action.id) {
                    return item;
                }
            });
        case "deleteAll":
            return draft = [];
            default:
                throw new Error("Error in passing data");
    }
}