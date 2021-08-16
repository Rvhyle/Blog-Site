import firebase from '../Services/firebase';

const db = firebase
  .firestore()
  .collection('blogs')
  .orderBy('date_posted', 'asc');

export default function getBlogs() {
  let blogDocs = [];
  db.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      blogDocs.push({ ...doc.data() });
    });
  });

  return blogDocs;
}
