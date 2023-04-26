import { useContext, createContext, useEffect, useState } from "react";
//https://dmitripavlutin.com/react-context-and-usecontext/
const UserContext = createContext("Unknown");
//For simpler applications with basic state management needs, useContext may be a good option to consider. On the other hand, for more complex applications with multiple data sources and complex state updates, Redux may provide a more efficient and scalable solution.

export function UseContext1() {
  const [userName, setUserName] = useState("John Smith");
  useEffect(() => {
    setTimeout(() => {
      setUserName("Smith, John Smith");
    }, 3000);
  }, []);

  return (
    <> <h1>I UseContext Examp1</h1>
    <UserContext.Provider value={userName}>
      <Layout>Main content</Layout>
    </UserContext.Provider>
    </>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  );
}

function UserInfo() {
  const userName = useContext(UserContext);
  return <span>{userName}</span>;
}
