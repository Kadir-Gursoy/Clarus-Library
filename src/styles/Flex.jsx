import styled from "styled-components";

const Flex = styled.div`

display: flex;
justify-content: center${({justify})=> justify || "center"};
align-items: center${({align})=> align || "center"};
flex-wrap: nowrap ${({wrap})=> wrap || "center"};

`


export default Flex;