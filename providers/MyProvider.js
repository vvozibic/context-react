import React from "react";

const MyContext = React.createContext("My");

// это может быть любая функция реализующая запрос данных на сервер
// axios, fetch, etc.
const fetchData = () => {};

class MyContextProvider extends React.Component {
  state = {
    data: [],
    status: "initial"
  };

  fetchData = async () => {
    // этот метод может использовать любой подход для запроса
    // данных с сервера
    const { response } = await fetchData();

    this.setState({
      data: response,
      status: "success"
    });
  };

  render() {
    const value = {
      orders: this.state.orders,
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
