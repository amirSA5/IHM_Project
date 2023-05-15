import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled } from '@mui/material';

import { DataContext } from '../../../context/DataProvider';

import { API } from '../../../service/api';
import SendIcon from '@mui/icons-material/Send';


//components
import Comment from './Comment';



const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`;


const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px !important;
  width: 100%; 
  margin: 0 20px;
  background-color: #F0F0F0;
  border-radius: 999px; /* Donne la forme de bulle */
  border: 1px solid #ccc; /* Ajoute une bordure */
  padding: 10px; /* Ajoute de l'espace autour du texte */
`;

const CustomSendIcon = styled(SendIcon)({
    color: '#0084ff',
    fontSize: '24px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: '#3a8eba',
      color: '#ffffff',
    },
  });
  
  
  

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const url = 'https://us.123rf.com/450wm/ahasoft2000/ahasoft20001801/ahasoft2000180119943/94542989-pictogramme-raster-de-nerd-man-le-style-est-symbole-graphique-plat-bicolore-couleurs-bleu-et-gris.jpg?ver=6'

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    }

    const addComment = async () => {
        await API.newComment(comment);
        setComment(initialValue)
        setToggle(prev => !prev);
    }

    return (
        <Box>
            <Container>
                <Image src={url} alt="dp" />
                <StyledTextArea
                    rowsMin={5}
                    placeholder="what's on your mind?"
                    onChange={(e) => handleChange(e)}
                    value={comment.comments}
                />
              <Button
    
    color="primary"
    size="medium"
    style={{ height: 100 }}
    onClick={(e) => addComment(e)}
    startIcon={<CustomSendIcon />}
></Button>
            </Container>
            <Box>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Comments;