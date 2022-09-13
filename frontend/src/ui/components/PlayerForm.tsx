const PlayerForm: React.FC = () => {
  return (
    <form onSubmit={() => console.log("SUBMITTING")}>
      <input type="text" name="name" value="prova" />
    </form>
  );
};
export default PlayerForm;
