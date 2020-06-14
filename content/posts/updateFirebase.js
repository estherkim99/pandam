import firebase from "firebase/app";
import database from "firebase/database";
import firestore from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAevVRNvx8u5rVY4x6B0hmCS-BQdAKXU0E",
    authDomain: "pandam-magazine.firebaseapp.com",
    databaseURL: "https://pandam-magazine.firebaseio.com",
    projectId: "pandam-magazine",
    storageBucket: "pandam-magazine.appspot.com",
    messagingSenderId: "343146787740",
    appId: "1:343146787740:web:f04f0ac3a8c40c48f64e59",
    measurementId: "G-MFNTF8VF60"
  };

    firebase.initializeApp(firebaseConfig);
    console.log("initialized firebase with configs")

    var db = firebase.firestore();

db.collection("articles").doc("2020-02-07-amsterdam-through-stories-en").set({

        author: "Scintilla Benevolo",
        date: firebase.firestore.Timestamp.fromDate(new Date("February 7, 2020")),
        title: "Amsterdam through stories, pictures and podcasts: this is Pan-Dam",
        linkTitle : "Amsterdam through stories, pictures and podcasts: this is Pan-Dam",
        language : "English",
        tags : ["Amsterdam"],
        mainImage : "/static/media/2020-02-07-amsterdam-through-stories.jpeg",
        slug : "2020-02-07-amsterdam-through-stories-en",
        html: "<p>Pan-Dam was born in 2019, on the 22nd of October, in the cafè of the Kriterion Filmtheatre. A few weeks before I had decided to open my own publication, to break my inertia and finally get started on a project I had been fantasizing about for years. I spent sleepless nights posting and posting in a multitude of writing-related Facebook groups, texting and emailing hundreds of people, hoping to find someone willing to embark on this project with me.</p><p>I received three answers and quickly hurried to schedule a first meeting. On that 22nd of October I met Chiara, Tiana and Fanny, and within a few hours Pan-Dam was born. Four strangers sitting at a coffee table, this is how it started. Pan-Dam: stories of Amsterdam, for Amsterdam. Our aim is to provide an analysis of Amsterdam’s urban dynamics -its strengths, weaknesses, uniquenesses, contours, people- through the stories of those who make Amsterdam what it is.</p><p>We want to empower our readers to participate in an innovative, sustainable development of Amsterdam by providing them with a critical sketch of the city. Hence the name, ‘all’-Dam: <strong>involving all people, exposing all urban traits.</strong> What we have managed to achieve in the past three months wouldn’t have been possible without 31mag.nl: their support, mentorship and care.</p><p><strong>Stay tuned for an exciting six months of provocative articles, photography and an eye-opening podcast.</strong></p>"


}).then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});