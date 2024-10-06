import React from 'react'

const UserCard = () => {
    // const {firstName, lastName, photoUrl,age,gender} = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="user_image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{"Rahul" + " " + "Dravid"}</h2>
    {/* <p>{age + ", " + gender}</p> */}
    <p>{"Hello"}</p>
    <div className="card-actions justify-center my-4">
    <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard