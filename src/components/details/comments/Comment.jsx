import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
  margin-top: 30px;
  background-color: #d3e3eb;
  padding: 10px;
  border-radius: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    border-top: 10px solid transparent;
    border-right: 20px solid #d3e3eb;
    border-bottom: 10px solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    border-top: 10px solid transparent;
    border-left: 20px solid #e6f2ff;
    border-bottom: 10px solid transparent;
  }
`;




const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: bold;
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;



const StyledDate = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  color: #4f5d75;
  position: relative;
  display: inline-block;
  padding: 0 5px;
  margin-right: 10px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    width: 6px;
    height: 6px;
    background-color: #4f5d75;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;


const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)

    const removeComment = async () => {
        await API.deleteComment(comment._id);
        setToggle(prev => !prev);
    }

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                {comment.name === account.username && <DeleteIcon onClick={() => removeComment()} />}
            </Container>
            <Typography>{comment.comments}</Typography>
        </Component>
    )
}

export default Comment;