import React, { useState, useEffect } from 'react';
import { Await } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

function Githup() {
    const data = useLoaderData()
//   const [data, setData] = useState(null); // null to start

//   useEffect(() => {
//     fetch(`https://api.github.com/users/hiteshchoudhary`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div>
      GitHub Followers: {data ? data.followers : 'Loading...'}
    </div>
  );
}

export default Githup;

export const dataInfoLoader=async ()=>{
  const mydata = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return mydata.json();
}
