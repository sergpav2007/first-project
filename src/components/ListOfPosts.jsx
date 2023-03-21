import { useState, useEffect } from "react";

const ListOfPosts = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const   url = 'http://localhost:3001/posts';
        var responseClone;
        const fetchData = async () => {
            await fetch(url)
                .then(resp => { responseClone = resp.clone(); return resp.json(); })
                .then((json) => {
                    const data = json.map((item, index) => ({ id: index + 1, ...item }));
                    setPost(data);
                },
                    (rejectionReason) => {
                    console.log('Error parsing JSON from response:', rejectionReason, responseClone);
                    responseClone.text()
                        .then((bodyText) => {
                            console.log('Received the following instead of valid JSON:', bodyText);
                        });
                });
        };
        fetchData();
    }, []);
    return post;
};

export default ListOfPosts;