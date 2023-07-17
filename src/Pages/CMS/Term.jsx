import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Term() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   
   `}
    </div>
  );

  return (
    <Root>
      {content}
      <Divider>&</Divider>
      {content}
      <Divider textAlign="left">&</Divider>
      {content}
      <Divider textAlign="right">&</Divider>
      {content}
      <Divider>&</Divider>
      {content}
    </Root>
  );
}
