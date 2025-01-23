const Usercard = () => {
  // Static user details
  const profilePhoto = "https://picsum.photos/200"; // Placeholder image
  const name = "Nigel Tony";
  const email = "nigel.tony@btech.christuniversity.in";
  const age = "22";
  const phone = "+91 8850695769";
  const address = "Bengaluru";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.image} />
      <h2 style={styles.name}>{name} </h2>
      <p style={styles.info}>Email: {email}</p>
      <p style={styles.info}>Age: {age}</p>
      <p style={styles.info}>Phone: {phone}</p>
      <p style={styles.info}>Address: {address}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #09122C",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#F5EFE7",
    textAlign: "center",
  },

  image: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  },

  name: {
    margin: "8px 0",
    fontSize: "1.5em",
    color: "#213555",
  },

  info: {
    fontSize: "1em",
    color: "#3E5879",
    margin: "4px 0",
  },
};

export default Usercard;
