import axios from "axios";

class AllService
{
    URL='http://localhost:8080/api/users'
    
    getAllUsers()
    {
        let token='';
        token=localStorage.getItem('token');
        if(token==null || token=== '')
            return;
        let header={
            'authorization': 'Bearer '+token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        return axios.get(this.URL,{headers:header});
    }
    
}
export default new AllService();
