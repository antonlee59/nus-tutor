import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";
import posts from "./SampleData";

const Feed = () => {
  const [loading, setLoading] = useState(true);

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
          {posts.map((post, index) => {
            console.log(index);
            return <Post key={index} post={post} />;
          })}
          {posts.map((post, index) => {
            console.log(index);
            return <Post key={index} post={post} />;
          })}
          {posts.map((post, index) => {
            console.log(index);
            return <Post key={index} post={post} />;
          })}
        </>
      )}
    </Box>
  );
};

export default Feed;
