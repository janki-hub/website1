import react from 'react';
import Avatar from './Avatar';

const Avatarlist = (props) =>
{
    return(
   <div className="divstyle ma4 bg-light-blue dib pa3 grow tc">
              

              <img src={`//joeschmoe.io/api/v1/female/${props.name}}`} alt="Avatar"></img>  
                <h1>{props.name}</h1>
                <p> {props.work}</p>



         </div>
    )
}




    export default Avatarlist;