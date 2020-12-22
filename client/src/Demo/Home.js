import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
export default () =>{
    const {email} = useContext(AuthContext);
   return(
        <div>
            <h1>Welcome {email}</h1>
        </div>
   ) 
}