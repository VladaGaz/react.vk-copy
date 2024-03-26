import { FC, useEffect, useState } from "react";
import { IPost } from "../../../types";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { collection, onSnapshot } from "firebase/firestore";

import { useAuth } from "../../providers/useAuth";
import { initialPosts } from "./initialPosts";
import Card from "../../ui/Card";

const Posts: FC = () => {
  const { db } = useAuth();
  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (doc) => {
      doc.forEach((d) => {
        setPosts((prev) => [
          ...prev,
          {
            author: d.data().author,
            createdAt: d.data().createdAt,
            content: d.data().content,
          },
        ]);
      });
    });

    return () => unsub();
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <Card key={`Post-${index}`}>
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
        </Card>
      ))}
    </>
  );
};

export default Posts;
