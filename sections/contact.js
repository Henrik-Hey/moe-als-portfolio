import React from "react";
import styled from "styled-components";
import { Container, Box, Grid, TextField, Fade } from "@mui/material";

const ContactMe = () => {
  const [hasSent, setHasSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const submitFunction = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log(name, email, phone, message);
      fetch(
        "https://0c0yt8yb74.execute-api.us-east-2.amazonaws.com/prod/contact-me",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, message }),
        }
      )
        .then((res) => res.json())
        .then((message) => {
          console.log(message);
          setHasSent(message == "success");
        });
    },
    [email, message, name, phone]
  );

  return (
    <IntroContainer maxWidth="lg">
      <IntroTextContainer>
        <IntroText1>
          <b>Let’s make something awesome together.</b>
          <br />
          Send me a message and let’s talk!
        </IntroText1>
      </IntroTextContainer>
      {hasSent ? (
        <Box textAlign="center" mt={8}>
          <Fade in={hasSent}>
            <IntroText1>Message sent!</IntroText1>
          </Fade>
        </Box>
      ) : (
        <FormContainer>
          <Box mt={8} component="form" onSubmit={submitFunction}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  inputProps={{
                    type: "email",
                    max: "64",
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Phone"
                  variant="standard"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Box mt={4} mb={8}>
                  <TextField
                    label="Message"
                    variant="standard"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    inputProps={{ max: 256 }}
                    required
                  />
                </Box>
                <Box width="100%" display="flex" justifyContent="flex-end">
                  <Button type="submit">Send Message</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </FormContainer>
      )}
    </IntroContainer>
  );
};

const IntroContainer = styled(Container)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  padding-top: 128px !important;
`;

const IntroText1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-family: "Epilogue", sans-serif;
  margin-block-start: 0em;
  margin-block-end: 0em;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 42px;
  }
`;

const IntroTextContainer = styled.div`
  width: 100%;
  border-left: 6px solid ${({ theme }) => theme.palette.primary.main};
  padding-left: 20px;
  margin-left: 20px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    border-left: 12px solid ${({ theme }) => theme.palette.primary.main};
    font-size: 42px;
  }
`;

const FormContainer = styled.div`
  width: 100%;

  /* ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-left: 20px;
  } */
`;

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.palette.primary.main};
  color: white;
  font-size: 1rem;
  text-align: center;
  padding: 14px 42px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export default ContactMe;
