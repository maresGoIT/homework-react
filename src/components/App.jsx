import Header from "./Header";
import Test from "./Test";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Header />
      <Test />
      React homework template
    </div>
  );
};
