import axios from "axios";

class UserService
{
    URL='http://localhost:8080/api/users'
    URL2='http://localhost:8080/api/expenses'
    URL3='http://localhost:8080/api/categories'
    URL4='http://localhost:8080/api/users/byEmailId/'
    signup(user)
    {
        return axios.post(this.URL+'/signup',user)
    }
    
    login(user)
    {
        
        return axios.post(this.URL+'/login',user)
    }

    isAuthenticated()
    {
        return !!localStorage.getItem('token');
    }
    
    getAllUsers(user){
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
    getAllExpense()
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
        console.log("Fetching ...")
        return axios.get(this.URL2,{headers:header});
    
    }


    addExpense(expense)
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
        console.log("jag:")
        console.log(expense)
        return axios.post(this.URL2,expense,{headers:header});
    }

    updateExpense(id,expense)
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
        return axios.put(this.URL2+"/"+id,expense,{headers:header});
    }

    deleteExpense(id)
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
        return axios.delete(this.URL2+"/"+id,{headers:header});
    }
    findUserByEmail(emailId)
    {
        let token='';
        token=localStorage.getItem('token');
        if(token==null || token==='')
            return;
        let header={
            'authorization': 'Bearer '+token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        return axios.get(this.URL4+emailId,{headers:header});
    }
    getCategories(name){
        let token='';
        token=localStorage.getItem('token');
        if(token==null || token=== '')
            return;
        let header={
            'authorization': 'Bearer '+token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        return axios.get(this.URL3+"/byCategoryName/"+name,{headers:header})
    }
    getAllCategories(){
        let token='';
        token=localStorage.getItem('token');
        if(token==null || token=== '')
            return;
        let header={
            'authorization': 'Bearer '+token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        return axios.get(this.URL3,{headers:header})
    }

    // getUserById(id){
    //     let token='';
    //     token=localStorage.getItem('token');
    //     if(token==null || token=== '')
    //         return;
    //     let header={
    //         'authorization': 'Bearer '+token,
    //         'Accept' : 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    //     return axios.get(this.URL4,{headers:header})

    // }

   
    
    // getAllExpensesOrderedByDateDesc(){
    //     let token='';
    //     token=localStorage.getItem('token');
    //     if(token==null || token=== '')
    //         return;
    //     let header={
    //         'authorization': 'Bearer '+token,
    //         'Accept' : 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    //     return  axios.get(this.URL2,{headers:header});
    // }
    // findExpenseById(id)
    // {
    //     let token='';
    //     token=localStorage.getItem('token');
    //     if(token==null || token=== '')
    //         return;
    //     let header={
    //         'authorization': 'Bearer '+token,
    //         'Accept' : 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    //     return axios.get(this.URL+"/"+id,{headers:header});
    // }
}
export default new UserService();