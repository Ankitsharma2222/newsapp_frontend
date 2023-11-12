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

import CNN from "../../assets/NewsLogo/cnn.jpg"

import "./styles.css";

export default function NewsCard() {
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


    return (
        <div className="newsCard">
            <Card
                sx={{
                    borderRadius: "1.5rem",
                    margin: "4%",
                    width: 345,
                    height: 430,
                    display: "inline-block",
                    boxShadow: "2px 2px 8px gray"
                }}
            >
                {/* <Link to={`/news/${news._id}`} className="news-list__link"> */}
                {/* <Link to={`/`} className="news-list__link"> */}

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
                                    {toTitleCase("Politics")}
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
                            src="https://media.cnn.com/api/v1/images/stellar/prod/231110210019-rfk-jr-file-111023.jpg?c=16x9&q=h_438,w_780,c_fill"
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
                                {trimTitle(" How RFK Jr. could change the outcome of the 2024 election")}
                               
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
                    <span className="card__date">12 Nov,2023</span>

                </CardActions>
            </Card>
        </div>
    );
}