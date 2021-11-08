import React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import './home.css'


const options = {
    method: 'GET',
    url: 'https://free-football-soccer-videos.p.rapidapi.com/',
    params: { limit: '18', start: '0' },
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
                {this.state.datas?.map((match, index) =>
                    index < 50 && (





                        <div >
                            <Box
                                className="home"
                            >
                                <a href={match.competition.url}><h3>{match.competition.name}</h3></a>

                                <h3 className='names'>{match.title}</h3>
                                 
                                {/* <img src={match.thumbnail}/> */}
                                <p className="title" >{match.videos[0].title}</p>
                                <span className="time">{match.date}</span>
                                <iframe srcdoc={match.videos[0].embed} id='iframe'></iframe>
                                

                            </Box>




                        </div>)
                )

                }


            </div>


        )
    }
}
