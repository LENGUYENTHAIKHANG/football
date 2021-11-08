import React from 'react';

import axios from 'axios';
import './home.css'


const options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos.p.rapidapi.com/',
    params: {limit: '18', start: '0'},
    headers: {
        'x-rapidapi-host': 'free-football-soccer-videos.p.rapidapi.com',
        'x-rapidapi-key': '6fd2fbee1amsh1e4495ee6dd30f1p1038cejsn5ba6b5623062'
    }
};
export default class Home extends React.Component {

    state = {

        datas: [],
        


    }

    componentDidMount() {



        axios.request(options)
            .then(res => {
                const datas = res.data;
                this.setState({ datas });
                console.log(datas);

            })
            .catch(error => console.log(error));
    };


    render() {

        return (
            
            <div className="page"> 
                {this.state.datas?.map((match,index) =>
                index <15&&(
                    <div className="home">
                        <a href={match.competition.url}><h3>{match.competition.name}</h3></a>
                        
                        <h3>{match.title}</h3>
                        
                        
                       
                        <h6>{match.videos.embed}</h6>
                        
                        {/* <img src={match.thumbnail}/> */}
                        <p >{match.videos[0].title}</p>
                        <iframe srcdoc={match.videos[0].embed} id='iframe'></iframe>
                        <span>{match.date}</span>
                        


                    </div>)
                )
                   
    }
                        

</div>

          
        )
    }
}
