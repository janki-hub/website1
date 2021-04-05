 import react, { Component } from 'react';
 import './Avatar.css';
 import 'tachyons';
 import Avatarlist from './Avatarlist';
import { render } from '@testing-library/react';

 class Avatar extends Component{

    constructor(){

        super();
        this.state={
            name:"Welcome to the Webpage"
        }
    }
        namechange() {
         this.setState({
        name: "Hello! thank you for visiting!"
        })
    }
    

    render()
    {
     const avtarlistarray =[
         {
                id:1,
                name:"Janki",
                work:"UI developer"

         },
            {
                id:2,
                name : "vaibhavi",
                work :"Fronted developer"

             },

          {
                id:3,
                name:"Viral",
                work:"Web developer"

         },

        {
                id:4,
                name:"Megha",
                work:"backend developer"
          }
      ]
    
    

         const arraycard = avtarlistarray.map((arraycard,i) =>  {
        return <Avatarlist key = {i} id ={avtarlistarray[i].name} 
                     name={avtarlistarray[i].name}
                     work ={avtarlistarray[i].work}/> 

         }                    
               )
                   
    
    
        return(
    <div className="mainpage">
        <center><h1> {this.state.name} </h1></center>
                {arraycard}
          
        <center><button onClick={ () => this.namechange()}>Click to Explore. </button></center>
         </div>
               
      )         
   }
 
 }
 export default Avatar;