import Toast from "../../components/toast";

const Dashboard = () => {
  return (
    <div>
      <Toast
        isOpen={true}
        message={"Testing"}
        type={"success"}
        onToastClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Dashboard;
