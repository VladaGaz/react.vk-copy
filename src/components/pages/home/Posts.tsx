import { FC } from "react";
import { IPost } from "../../../types";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface IPosts {
  posts: IPost[];
}

const Posts: FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: 1,
            marginTop: 4,
          }}
          key={`Post-${index}`}
        >
          <Link
            key={post.author.id}
            to={`/profile/${post.author.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#111",
              marginBottom: 12,
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginRight: 2,
                borderRadius: "50%",
              }}
            >
              <Avatar
                src={post.author.avatar}
                sx={{ width: 46, height: 46, borderRadius: "50%" }}
              />
            </Box>

            <div>
              <div style={{ fontSize: "14px" }}>{post.author.name}</div>
              <div style={{ fontSize: "14px", opacity: "0.6" }}>
                {post.createdAt}
              </div>
            </div>
          </Link>

          <p>{post.content}</p>

          {post?.images?.length && (
            <ImageList cols={3} gap={8} variant="masonry">
              {post.images.map((image) => (
                <ImageListItem key={image}>
                  <img src={image} alt={""} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      ))}
    </>
  );
};

export default Posts;
