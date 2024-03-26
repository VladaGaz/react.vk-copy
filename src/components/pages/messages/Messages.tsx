import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { FC, useEffect, useState, MouseEvent } from "react";
import { IMessage } from "../../../types";
import { useAuth } from "../../providers/useAuth";
import { Alert } from "@mui/material";

const Messages: FC = () => {
  // const [messages, setMessages] = useState<IMessage>([]);
  const [message, setMessage] = useState();
  const [error, setError] = useState("");

  const { user, db } = useAuth();
  // useEffect(() => {
  //   const unsub = onSnapshot(collection(db, "messages"), (doc) => {
  //     doc.forEach((d) => {
  //       setMessages((prev) => [
  //         ...prev,
  //         {
  //           user: d.data().user,
  //           message: d.data().message,
  //         },
  //       ]);
  //     });
  //   });

  //   return () => unsub();
  // }, []);

  // const addMessagesHandler = async (e: MouseEvent<HTMLButtonElement>) => {
  //   try {
  //     await addDoc(collection(db, "posts"), {
  //       user: user,
  //       message: message,
  //     });
  //   } catch (e: any) {
  //     setError(e);
  //     console.error("Error", e);
  //   }

  //   setMessage("");
  // };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <div>Messages</div>
    </>
  );
};

export default Messages;
