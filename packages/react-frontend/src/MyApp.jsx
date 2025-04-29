// src/MyApp.jsx
import Table from "./Table";
import Form from "./Form";
import React, {useState, useEffect} from 'react';

function MyApp() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchUsers()
            .then((res) => res.json())
            .then((json) => setCharacters(json["users_list"]))
            .catch((error) => { console.log(error); });
      }, [] );

    return (
        <div className="container">
            <Table
                characterData={characters}
                removeCharacter={removeOneCharacter}
            />
            <Form handleSubmit={updateList} />
        </div>
    );


    function removeOneCharacter(person) {
      deleteUser(person)
      .then((response) => {
        if (response.status === 204) {
          setCharacters(prev => prev.filter(p => p !== person));
        } else {
          console.log("204 not received");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

    function deleteUser(person) {
        const promise = fetch("Http://localhost:8000/users", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
    
        return promise;
    }

    function updateList(person) {
      postUser(person)
        .then((response) => {
          if (response.status === 201) {
            return response.json(); 
          } else {
            console.log("201 not received, actual status:", response.status);
            return null; 
          }
        })
        .then((data) => {
          if (data) {
            setCharacters(prev => [...prev, data]);
          }
        })
        .catch((error) => {
          console.log("Fetch error:", error);
        });
    }
    
    function fetchUsers() {
        const promise = fetch("http://localhost:8000/users");
        return promise;
    }

    function postUser(person) {
        const promise = fetch("Http://localhost:8000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        });
    
        return promise;
      }

}

export default MyApp;
