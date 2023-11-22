import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import {Button} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { useEffect  ,useState} from "react";
import CNN from "../../assets/NewsLogo/cnn.jpg"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Catagory() {
    const [HomeNews,setHomeNews]=useState([])
    const navigate=useNavigate()
    const genre=useParams().genre
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    const trimTitle = (str) => {
        if (str.length > 100) {
            return str.substr(0, 100) + "...";
        } else return str;
    };

    useEffect(()=>{
        fetch(`http://localhost:5000/news/list/${genre}`,{
            method:"get",
        }).then(res=>res.json())
        .then((result)=>{
            console.log(result)
            setHomeNews(result);

        })
    },[])
    



    return (
        <div className="newsCard">
            <h2> Results Realted to {genre} </h2>
            { HomeNews && HomeNews.length >0 && HomeNews.map((item)=>{
                return (
            <Card
                sx={{
                    borderRadius: "1.5rem",
                    margin: "4%",
                    width: 345,
                    height: 430,
                    display: "inline-block",
                    boxShadow: "2px 2px 8px gray"
                }}
                onClick={()=>navigate("/news/"+item._id)} >

            

                    <CardActionArea>
                        <CardHeader
                            avatar={
                                <Avatar
                                    sx={{ height: "30px", width: "30px" }}
                                    src={CNN}
                                    alt="source"
                                />
                            }
                            title={
                                <p className="card__genre">
                                    {toTitleCase(item.genre)}
                                </p>
                            }
                        />
                        <CardMedia
                            sx={{
                                width: "320px",
                                borderRadius: "1rem",
                                margin: "auto",
                            }}
                            component="img"
                            height="194"
                            // src={news.image_link.length===0 ? Placeholder : news.image_link}
                            src={item.image_link}
                            alt="News Image"
                        />
                        <CardContent>
                            <Typography
                                sx={{
                                    height: "85px",
                                    lineHeight: 1.3,
                                    fontSize: "1.18rem",
                                    fontWeight: "700",
                                    color: "#4d4d4d",
                                }}
                            >
                                {trimTitle(item.title)}
                               
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                {/* </Link> */}
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 0,
                        paddingBottom: "10px",
                    }}
                    disableSpacing
                >
            
                    <Button

                        onClick={()=>{
                            console.log("hi")
                        }}
                    >
                        <ShareIcon sx={{ fontSize: "2rem", color: "black" }} />
                    </Button> 
                    {/* <span className="card__date">{date(news.date)}</span> */}
                    <span className="card__date">{item.date.substr(0,10)}</span>

                </CardActions>
            </Card>
                )
            })}
        </div>
    );
}