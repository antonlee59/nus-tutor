import {
  Comment,
  Favorite,
  FavoriteBorder,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = (props) => {
  let { user, content, date, comments, likes } = props.post;
  return (
    <Card sx={{ margin: 5 }}>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe" />}
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title={user}
          subheader={date}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Badge badgeContent={comments} color="primary">
              <Comment />
            </Badge>
          </IconButton>
          <IconButton aria-label="Comments">
            <Typography>{comments} Comments</Typography>
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Post;
