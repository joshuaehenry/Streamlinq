import axios from 'axios';

const listUrl = 'http://localhost:5000/twitch/list';
const searchUrl = 'http://localhost:5000/twitch/users';
    
const fetchBroadcasts = async () => {
    try 
    {
        const res = await axios.get(listUrl);
        return res.data;
    }
    catch (err)
    {
        console.error(err);
    }
};

const fetchProfileImages = async(broadcasts) => {
    let url = `${searchUrl}?id=`;

    broadcasts.forEach((broadcast, index) => {
        if (index < broadcasts.length - 1)
            url += `${broadcast.user_id}&id=`;
        else
            url += broadcast.user_id;
    });

    try
    {
        const res = await axios.get(url);

        let users = res.data.data;
        let profileImages = [];

        users.forEach((user, index) => {

            profileImages[user.id] = user.profile_image_url;
        });

        return profileImages;
    }
    catch (err)
    {
        console.error(`Error while fetching profile images: ${err}`);
    }
};

export { fetchBroadcasts, fetchProfileImages };