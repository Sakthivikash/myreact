import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  image: yup
    .string()
    .required("Why not fill this image? 😉")
    .min(4, "Need a longer email 😄"),
  name: yup
    .string()
    .required("Why not fill this name? 😉"),
  summary: yup
    .string()
    .required("Why not fill this summary? 😉")
    .min(20, "Need a longer summary 😄"),
  direct: yup
    .string()
    .required("Why not fill this director name? 😉"),
  music: yup
    .string()
    .required("Why not fill this music director name? 😉"),
  rating: yup
    .number()
    .required("Why not fill this rating? 😉")
    .min(0)
    .max(10),
  trailer: yup
    .string()
    .required("Why not fill this trailer 😉")
    .min(4, "Need a longer  trailer 😄")
});



export function AddMovie() {
const history= useHistory();
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      summary: "",
      direct: "",
      music:"",
      rating: "",
      trailer: ""
    
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      addMovie(newMovie);
    },
  });

const addMovie= (newMovie) => {
  console.log("onSubmit", newMovie);
  fetch(API, {
    method: "POST",body: JSON.stringify(newMovie),
    headers: {"Content-Type": "application/json"}})
    .then(() => history.push("/movieslist"));

}
  return (
<div className='box'>
  <h1 className="title">Add The New Movie</h1>
    <form onSubmit={formik.handleSubmit} className='inputdata'>
      <div className='inputs'>
      <TextField
          className="outlined-basic"
          type="text"
          label="Image"
          id="image"
          name="image"
          onChange={formik.handleChange}
          value={formik.values.image}
          onBlur={formik.handleBlur}
          error={formik.touched.image && formik.errors.image}
          helperText={
            formik.touched.image && formik.errors.image
              ? formik.errors.image
              : ""
          }
        /><br />
          <TextField
         className="outlined-basic"
          type="text"
          label="Name"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name}
          helperText={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""
          }
        /><br />
          <TextField
          className="outlined-basic"
          type="text"
          label="Summary"
          id="summary"
          name="summary"
          onChange={formik.handleChange}
          value={formik.values.summary}
          onBlur={formik.handleBlur}
          error={formik.touched.summary && formik.errors.summary}
          helperText={
            formik.touched.summary && formik.errors.summary
              ? formik.errors.summary: ""
          }
        /><br />
          <TextField
           className="outlined-basic"
          type="text"
          label="Director"
          id="direct"
          name="direct"
          onChange={formik.handleChange}
          value={formik.values.direct}
          onBlur={formik.handleBlur}
          error={formik.touched.direct && formik.errors.direct}
          helperText={
            formik.touched.direct && formik.errors.direct
              ? formik.errors.direct : ""
          }
        /><br />
          <TextField
          className="outlined-basic"
          type="text"
          label="Music"
          id="music"
          name="music"
          onChange={formik.handleChange}
          value={formik.values.music}
          onBlur={formik.handleBlur}
          error={formik.touched.music && formik.errors.music}
          helperText={
            formik.touched.music && formik.errors.music
              ? formik.errors.music: ""
          }
        />  <br />
         <TextField
          className="outlined-basic"
          type="text"
          label="Rating"
          id="rating"
          name="rating"
          onChange={formik.handleChange}
          value={formik.values.rating}
          onBlur={formik.handleBlur}
          error={formik.touched.rating && formik.errors.rating}
          helperText={
            formik.touched.rating && formik.errors.rating
              ? formik.errors.rating : ""
          }
        /><br />
          <TextField
          className="outlined-basic"
          type="text"
          label="Trailer"
          id="trailer"
          name="trailer"
          onChange={formik.handleChange}
          value={formik.values.trailer}
          onBlur={formik.handleBlur}
          error={formik.touched.trailer && formik.errors.trailer}
          helperText={
            formik.touched.trailer && formik.errors.trailer
              ? formik.errors.trailer : ""
          }
      /><br />

      </div>
      <div id='addbtn'>
        <Button className="addbtn" type='submit' variant="contained" >Add the Movie</Button>
      </div>
     </form>
    {/* <Movieslist list={list}/> */}
</div>
  );
}
// onClick={() => {
//   const newMovie = {
//     name: name,
//     image: image,
//     summary: summary,
//     director: direct,
//     music: music,
//     rating: rating,
//     trailer: trailer
//   };
//   // setList([addmovie, ...list]);
 

  
// }}