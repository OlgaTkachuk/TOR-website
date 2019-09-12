// import React, {Component} from 'react';
//
// const ItemsContext = React.createContext();
//
// class ItemsProvider extends Component {
//     state = {
//         items: [],
//         featuredHome: false,
//         featuredNews: false,
//     };
//
//     render() {
//         // items.map(item => {
//         //     this.setState({
//         //         items: [...item],
//         //         featuredHome: items,
//         //         featuredNews: items
//         //     })
//         // })
//         return (
//             <ItemsContext.Provider value={{...this.state}}>
//                 {this.props.children}
//             </ItemsContext.Provider>
//         );
//     }
// }
// const ItemsConsumer = ItemsContext.Consumer;


// export {ItemsProvider, ItemsConsumer, ItemsContext};