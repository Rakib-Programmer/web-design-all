import React from 'react';

const User = (props) => {
    const familier = props.familiar;
    // console.log(familier)
    // let Greetings;
    // if(familier){
    //     Greetings = <p>wellcome, my friend</p>
    // }
    // else{
    //     Greetings = <p>Who the hell are you</p>
    // }

    //javascript ternary operator

    const Greetings = familier ? <p>wellcome, my friend</p>
    :  <p>Who the hell are you</p>

    // let number = 3
    // if(number > 5 && familier == true){
    //     <p>let's join my facebook</p>
    // }
    
    return (
        <div>
            <div>
            <h2>Greetings</h2>
            {
                Greetings
            }
            
            </div>
            <div>
                <h2>Food</h2>
                { familier? <p>I will buy Food for you</p>
                :<p>Lets eat his whose whose</p>}
                
            </div>
            <div>
                <h2>Connection</h2>
                { familier && <p>let's join my facebook</p>}
            </div>
        </div>
    );
};

export default User;