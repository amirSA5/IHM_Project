import { styled, Box, Typography } from '@mui/material';


const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    padding: 10px;
    background-color: #e6f1f8;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);

    & > img, & > p {
        padding: 0 5px 5px 5px;
    }

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #d2e2f5;
        transform: scale(1.05);
    }
`;


const Image = styled('img')({
    width: '60%',
    objectFit: 'cover',
    borderRadius: '60%',
    height: 150,
    transition: 'transform 0.2s ease-in-out',

    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    color: #424242;
    letter-spacing: 0.5px;
    line-height: 1.5;
    animation: fadeIn 0.5s ease-in-out;
`;

const Heading = styled(Typography)`
    font-size: 24px;
    font-weight: 600;
    font-family: poppins;
    margin-top: 10px;
    color: #212121;
    letter-spacing: 0.5px;
    line-height: 1.5;
    animation: slideInFromLeft 0.5s ease-in-out;
`;

const Details = styled(Typography)`
    font-size: 16px;
    font-weight: 400;
    color: #757575;
    letter-spacing: 0.5px;
    line-height: 1.5;
    animation: slideInFromRight 0.5s ease-in-out;
`;





const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://cdn-icons-png.flaticon.com/512/326/326020.png';

    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;
