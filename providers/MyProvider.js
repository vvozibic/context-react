import React from "react";

const MyContext = React.createContext();

// это может быть любая функция реализующая запрос данных на сервер
// axios, fetch, etc.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 2000);
  });
};

class MyContextProvider extends React.Component {
  state = {
    data: [],
    status: "initial"
  };

  fetchData = async () => {
    // этот метод может использовать любой подход для запроса
    // данных с сервера
    const data = await fetchData();

    this.setState({
      status: "success",
      data
    });
  };

  render() {
    const value = {
      data: this.state.data,
      fetchData: this.fetchData
    };

    return (
      <MyContext.Provider value={value}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyContextProvider };
