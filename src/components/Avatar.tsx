import React from "react";
import styled from "styled-components";

const SAvatar = styled.div<{ lg: boolean }>`
  width: ${(props) => (props.lg ? "30px" : "25px")};
  height: ${(props) => (props.lg ? "30px" : "25px")};
  border-radius: 50%;
  background-color: #2c2c2c;
  overflow: hidden;
`;

const Img = styled.img`
  max-width: 100%;
`;

interface IAvatarProps {
  url: any;
  lg: boolean;
}

const Avatar: React.FC<IAvatarProps> = ({ url = "", lg = false }) => {
  return <SAvatar lg={lg}>{url !== "" ? <Img src={url} /> : null}</SAvatar>;
};

export default Avatar;
