import React from 'react'
import Button from '@material-ui/core/Button';

const Description = ({location:{state},history,match}) => {
    return (
        
        <div>
            <h1>{state.onemovie.name}</h1>
            <h4>{state.onemovie.description}</h4>
            {state.onemovie.trailer ? (
                <iframe 
                width="560" 
                height="315" 
                src={state.onemovie.trailer} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>

                </iframe>
            ) : (<h2>"there is no trailer to watch"</h2>)
        }
            <Button variant="contained" color="secondary" onClick={()=>history.goBack()}>
                Go Back
            </Button>
        </div>
    )
}

export default Description
