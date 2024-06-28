import { IComment } from '../types';

export const mockedComments: IComment[] = [
    {
        commentId: 1,
        commentText: 'Some comment',
        rating: 4,
    },
    {
        commentId: 2,
        commentText: 'Some another comment',
        rating: 5,
    },
    {
        commentId: 3,
        commentText: 'Good comment',
        rating: 5,
    },
];

export const mockedProduct = {
    id: 1,
    title: 'Prod 1',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
    desc: 'Desk about prod 1',
    comments: [
        {
            commentId: 1,
            commentText: 'Some comment',
            rating: 4,
        },
        {
            commentId: 2,
            commentText: 'Some another comment',
            rating: 5,
        },
        {
            commentId: 3,
            commentText: 'Good comment',
            rating: 5,
        },
    ],
};

export const mockedProducts = {
    id: 1,
    title: 'Prod 1',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMOUlcm_1UhO81Hul6fSb3rJgjrLeh1GcGQ&s',
    desc: 'Desk about prod 1',
};
