"use client";

import {
  Column,
  Flex,
  Input,
  Textarea,
  Button,
  Text
} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

interface User {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  // Create refs for each input field
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSending, setIsSending] = useState(false);
  const endpoint = "https://jlhyggvfdklnoxzzhxbh.supabase.co/functions/v1/send-qoretech-email";

  const handleSend = async () => {
    setIsSending(true);

    // Retrieve values from refs
    const user: User = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    try {
      const response = await axios.post(endpoint, user, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsaHlnZ3ZmZGtsbm94enpoeGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NzQ1NTksImV4cCI6MjA1MDQ1MDU1OX0.ZTG5sHfu204nHlW841BI74VZobHadGKWoEyOY9Rraa0`,
        },
      });

      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        // Clear the inputs
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to send message.");
    }

    setIsSending(false);
  };

  return (
    <Column maxWidth="m">
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.blockAlign} flex={9} maxWidth={30} gap="m">
          <Text variant="heading-strong-xl" align="left">
            Have any questions? <br />Feel free to send us an email!
          </Text>
          <Input id="name" label="Name" ref={nameRef} />
          <Input id="email" label="Email" ref={emailRef} />
          <Textarea id="message" label="Your Message" lines={11} ref={messageRef} />
          <Button variant="secondary" fillWidth loading={isSending} onClick={handleSend}>
            Send
          </Button>
        </Column>
      </Flex>
      <ToastContainer />
    </Column>
  );
}
