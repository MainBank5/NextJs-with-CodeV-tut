//ypou're free to create new Ui for the default. however you can also use the same content as main page
//this default is at the root of anime so all slots encountering an error will receive this  
//the default page acts as a fallback upon refresh. rember the pages of the slot are unmatched in the URL
//so you have to provide their default file/ui for when the app refreshes espcially in sub-navgating slots

export default function DefaultAnime() {
    return (
      <div>
          <h1>Anime home page</h1>
      </div>
    )
  }