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
import ReCAPTCHA from "react-google-recaptcha";

interface User {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [isSending, setIsSending] = useState(false);
  const endpoint = "https://jlhyggvfdklnoxzzhxbh.supabase.co/functions/v1/send-qoretech-email";

  const handleSend = async () => {
    setIsSending(true);

    const user: User = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      toast.error("Please complete the CAPTCHA.");
      setIsSending(false);
      return;
    }

    try {
      const response = await axios.post(endpoint, { ...user, recaptcha: recaptchaValue }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });

      if (response.status === 200) {
        toast.success("Your message has been sent successfully!");
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
        recaptchaRef.current?.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to send message.");
    }

    setIsSending(false);
  };

  const localhost = '6Lczy-UqAAAAAKPvkeSLeU_eU112sjBta8555L8z';
  const qoretech = '6Le4yeUqAAAAACjZxgbYgHembon8Ah2Js5wHDnhr';
  
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
          <ReCAPTCHA
            sitekey={localhost}
            ref={recaptchaRef}
            theme={"dark"}
            size={"normal"}
          />
          <Button variant="secondary" fillWidth loading={isSending} onClick={handleSend}>
            Send
          </Button>
        </Column>
      </Flex>
      <ToastContainer />
    </Column>
  );
}