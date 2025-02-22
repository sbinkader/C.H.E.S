const users = [
  { name: "Chima", highestScore: 12, email: "lindsay.walton@example.com" },
  { name: "Safran", highestScore: 11, email: "courtney.henry@example.com" },
  { name: "Esther", highestScore: 10, email: "tom.cook@example.com" },
  { name: "Hassan", highestScore: 9, email: "whitney.francis@example.com" }
];

const Leaderboard = () => {
  return (
    <div
    style={{
        alignContent: "center",
        color: "red"
      }}>
      <h1>Leaderboard</h1>
      <p>A List of Players and Their Highest Scores</p>
      <table border="10"
      style={{
        width: "50vw",
      }}>
        <thead>
          <tr
          style={{
            fontSize: 36
          }}>
            <th>Name</th>
            <th>Highest Score</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.highestScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
