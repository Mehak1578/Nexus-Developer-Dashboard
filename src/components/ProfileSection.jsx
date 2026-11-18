function ProfileSection({ user }) {
    return (
        <section>
        <h2>{user.name}</h2>
        <h3>{user.role}</h3>
        <p>{user.bio}</p>
        <p>
        Status: {user.isAvailable ? "Available" : "Not Available"}
        </p>
        </section>
    );
}

export default ProfileSection;