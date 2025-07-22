//This component is the student card we see. In it is the functionality to show or hide bio information
// based on a button click.
import React from 'react';
function StudentCard(props) {
  // the props are passed into this Student card - which is data from the parent component - so we can then use that data in this component.
  const { name, major, year, bio, imageUrl } = props; // here the data is begin expanded into different variables for use. We know this is what was passed to us, because it was decided in the parent component, App.jsx.
  const [showBio, setShowBio] = React.useState(false); // here we are setting the state of showBio to false, and setShowBio is the hook we use to change that state.

  const toggleBio = () => {
    // function expression that when called, invokes the setShowBio hook. That will then set the showBio to the opposite value. So if true, then false.
    setShowBio(!showBio);
  };

  return (
    <div
      style={{
        maxWidth: '350px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '20px auto',
        backgroundColor: '#154ab5ff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={imageUrl} // variable deconstructed from props
        alt={name + "'s profile"} // again data passed down in props
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '12px',
        }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>
        {major} – {year}
      </p>
      <button
        onClick={toggleBio} // here in the useState hook being invoked on an event
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white',
        }}
      >
        {showBio ? 'Hide Bio' : 'Show Bio'} // here is a ternary operation
        asking if showBio state is true then button says 'Hide Bio' otherwise it
        says 'Show Bio'. We can write js expression here in the curly braces.
      </button>
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}{' '}
      // p element is shown if showBio state is true
    </div>
  );
}
// exporting StudentCard component here so it can be imported into App.jsx
export default StudentCard;
