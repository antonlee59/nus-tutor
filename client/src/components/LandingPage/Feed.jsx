import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState, useEffect } from "react";
import Post from "./Post";
import sampleposts from "./SampleData";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);
  const getPosts = async() => {
    try {
      const response = await fetch("http://localhost:8000/post");
      const jsonData = await response.json();
      const data = jsonData.reverse();

      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  setTimeout(() => {
    setLoading(false);
  }, [1000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          {posts.map((post, index) => {
            console.log(index);
            return <Post key={index} post={post} />;
          })}
          {sampleposts.map((post, index) => {
            console.log(index);
            return <Post key={index} post={post} />;
          })}
          {sampleposts.map((post, index) => {
            console.log(index);
            return <Post key={index} post={post} />;
          })}
          {sampleposts.map((post, index) => {
            console.log(index);
            return <Post key={index} post={post} />;
          })}
        </>
      )}
    </Box>
  );
};

export default Feed;
