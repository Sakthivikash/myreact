import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {

  let Movielist =[
    {
    name:"Nanban",
    image:"https://m.media-amazon.com/images/M/MV5BNDhhM2FmNDAtN2YwMS00ZWIxLTlhZjItOGU1OGMzYjRmZmIxXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
    summary:"Nanban (transl. Friend) is a 2012 Indian Tamil-language coming-of-age comedy-drama film directed by Shankar.[2] It is a remake of Rajkumar Hirani's Hindi film 3 Idiots (2009).[3][4] The film features an ensemble cast that includes Vijay, Jiiva, Srikanth, Ileana D'Cruz, Sathyaraj and Sathyan, amongst others in prominent roles.[5]",
    director:"Shankar",
    music:"Harris Jayaraj",
    rating:7.7
  },
  {
    name:"Sachein",
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dd215695f0ebc036b42fef3555b0fa1fcbbe5086cf7e371caa876002a224474a._RI_V_TTW_.jpg",
    summary:"Sachein is a 2005 Indian Tamil-language romantic comedy film directed by John Mahendran, and produced by Kalaippuli S. Thanu, starring Vijay, Bipasha Basu and Genelia in lead roles, with Santhanam, Vadivelu and Raghuvaran appearing in pivotal roles. The film marks Bipasha Basu's major Tamil Debut. The score and soundtrack is composed by Devi Sri Prasad.",
    director:"John Mahendran",
    music:"Devi Sri Prasad",
    rating:7.4
  },
  {
    name:"Mersal",
    image: "https://m.media-amazon.com/images/M/MV5BNmY2Mzg3NGEtZDg0Yy00MTJmLWI3YjQtZGFlNDliMjZiNDNmXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    summary: "Mersal (transl. Zapped) is a 2017 Indian Tamil-language action thriller film[6] directed by Atlee who co-wrote the film with K. V. Vijayendra Prasad and S. Ramana Girivasan. Produced by Thenandal Studio Limited in their 100th production, the film stars Vijay, S. J. Surya, Sathyaraj, Vadivelu, Hareesh Peradi, Kajal Aggarwal, Nithya Menen and Samantha.",
    director:"Atlee",
    music:"A.R.Rahman",
    rating:7.8
  },
    {
    name:"Kutty",
    image:  "https://static.digit.in/OTT/images/tr:w-1200/kutty-2010-5f78407a6eb2cc0b7313a3e4.jpg",
    summary: "Kutty (English: Small kid) is 2010 Indian Tamil-language romantic action-drama film directed by Mithran Jawahar, who with the project, recombines with the lead actor following the success of their previous venture. The film stars Dhanush, Shriya Saran and Sameer Dattani in the lead roles with Radha Ravi playing a pivotal role.",
    director:  "Mithran Jawahar",
    music:"Devi Sri Prasad",
    rating:5.3
    },
    {
      name:"Santosh Subramaniam",
      image: "https://images-na.ssl-images-amazon.com/images/I/91qa0KtSGQL._RI_.jpg",
      summary:"Santosh Subramaniam (spelt Santhosh Subramaniyam onscreen)[2] is a 2008 Indian Tamil-language romantic comedy film directed by Mohan Raja and produced by Kalpathi S. Agoram. The film stars Jayam Ravi and Genelia while Prakash Raj, Geetha and Sayaji Shinde play supporting roles.",
      director:"Mohan Raja",
      music:"Devi Sri Prasad", 
      rating:7.5
    }
  ];
const [movieslist,setmovieslist]=useState(Movielist);

const [image,setimage]=useState("");
const [name,setname]=useState("");
const [summary,setsummary]=useState("");
const [direct,setdirect]=useState("");
const [music,setmusic]=useState("");
const [rating,setrating]=useState("");

  return (
    
    <div className="App">
      <h1>MOVIES LIST</h1>
      <div className='inputdata'>
      <div className='inputs'>
        <input placeholder='Enter the image URL' onChange={(event) => setimage(event.target.value)}/>
        <input placeholder='Enter the movie name' onChange={(event) => setname(event.target.value)}/>
        <input placeholder='Enter the movie summary' onChange={(event) => setsummary(event.target.value)}/>
        <input placeholder='Enter the director name' onChange={(event) => setdirect(event.target.value)}/>
        <input placeholder='Enter the music director name' onChange={(event) => setmusic(event.target.value)}/>
        <input placeholder='Enter the rating of the movie' onChange={(event) => setrating(event.target.value)}/>
      </div>
      <div id='addbtn'><button className='button'
      onClick={()=>{
        const addmovie={
          name: name,
          image: image,
          summary:summary,
          direct:direct,
          music: music,
          rating:rating
        };
        setmovieslist([addmovie,...movieslist])
      }}
      >Add The Movie</button></div>
    </div>
   
      <div  className='container'>
      {movieslist.map((e) => <Welcome 
        name={e.name}
        image={e.image} 
        summary={e.summary}
        director={e.director}
        music={e.music}
        rating={e.rating}
        />)}
      </div>
  </div>
  );
}

//welcome
function Welcome({ name, image, summary, director, music, rating}) {
  let [like,setlike]= useState(0);
  let [deslike,setdeslike]= useState(0);
  const styles= {
    color: rating >= 7.5 ? "green" : "red",
  }
  
  return (
      <div id="main">
        <div className="image">
          <img className="img" src={image} alt="profileimg" />
        </div>
        <div id="content">
          <h2><b>Movie Name: </b>{name}</h2>
          <div><b>Summary:</b>{summary}</div>
          <div><b>Director:</b>{director}</div>
          <div><b>Music:</b>{music}</div>
          <div><b>Rating: <i class="fa fa-star"></i> </b><span style={styles}>{rating}</span></div>
          <div className='btn' >
            <div><button className='like' onClick={() => {setlike(like + 1);}}>
            <i class="fa fa-thumbs-up" aria-hidden="true"></i> {like}</button></div>
            <div><button className='deslike' onClick={() => {setdeslike(deslike + 1);}}>
            <i class="fa fa-thumbs-down" aria-hidden="true"></i> {deslike}</button></div>
          </div>
        </div>
      </div>
  );
} 
