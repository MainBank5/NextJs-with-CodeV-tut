//this slug page will capture all files that preceed the with the path doc/
type Docprops = {
    params:{
        slug:string[]
    }
}


export default function Doc ({params}:Docprops) {
    if(params.slug?.length === 2) {
        return (
            <>
              <h1>Viewing features for {params.slug[0]} and concept {params.slug[1]}</h1>
            </>
        )
    } else if (params.slug?.length === 1) {
        return (
        <div> 
            <p>You are viewing concepts related to {params.slug[0]}.</p>
        </div>
        )
    } else 
    return (
        <div>
            <h1>This is the docs home</h1>
        </div>
    )
}

//the first square brackets is a catch all for all  the slugs. the additional brackets is for thehe initial page when there are no slugs