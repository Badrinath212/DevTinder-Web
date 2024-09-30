

const UserCard = ({ user }) => {
    
  return user && (
    <div>
        <div className="card bg-slate-900 w-96 shadow-xl text-white">
            <figure>
                <img
                src={user?.photoUrl}
                alt="user photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user?.firstName + " " + user?.lastName}</h2>
                {user.age && user.gender && <p>{user.gender}, {user.age}</p>}
                <p>{user?.about}</p>
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