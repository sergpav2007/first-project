import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const ListOfPosts = () => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        // const   url = 'http://localhost:3001/posts';
        // var responseClone;
        const docRef = ref(db, "/");
        onValue(docRef, (snapshot) => {
            // if (snapshot.exists()) {
                // let arrPosts = [];
                // snapshot.forEach(element => {
                //     arrPosts.push({ ...element.val(), id: element.id })
                // });
                // setPost(arrPosts);
                setPost(snapshot.val());
            // }
            // else { fetchData(); };
        });
        // const fetchData = async () => {
        //     await fetch(url)
        //         .then(resp => { responseClone = resp.clone(); return resp.json(); })
        //         .then((json) => {
        //             const data = json.map((item, index) => ({ id: index + 1, ...item }));
        //             setPost(data);
        //             // setDoc((docRef), { id: data.id, title: data.title, imageUrl: data.imageUrl, description: data.description, expertComment: data.expertComment });
        //             // set((docRef), { id: data.id, title: data.title, imageUrl: data.imageUrl, description: data.description, expertComment: data.expertComment });
        //         },
        //             (rejectionReason) => {
        //                 console.log('Error parsing JSON from response:', rejectionReason, responseClone);
        //                 responseClone.text()
        //                     .then((bodyText) => {
        //                         console.log('Received the following instead of valid JSON:', bodyText);
        //                     });
        //             });
        // };        
    }, []);
    return post;
};

export default ListOfPosts;