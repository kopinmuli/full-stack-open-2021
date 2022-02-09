import React from "react";


const PrintPersons = ({persons, filter }) => {
    const personsToShow = persons.filter(person => person.name.includes(filter))
    return (
      <>
      {personsToShow.map(personsToShow =>
        <p key={personsToShow.name}> {personsToShow.name} {personsToShow.number}</p>
      )}
      </>
    )
  }

  export default PrintPersons;