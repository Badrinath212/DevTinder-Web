

const UserCard = ({ user }) => {
    const { firstName, lastName, age, gender, about, skills, photoUrl} = user;
  return (
    <div>
        <div className="card bg-slate-900 w-96 shadow-xl text-white">
            <figure>
                <img
                src={photoUrl}
                alt="user photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{gender}, {age}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center p-2">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Intrested</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserCard