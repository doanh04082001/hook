import React from 'react';
import './App.css';
import Aside from './components/Aside';
import BoxList from './components/BoxList';
import Footer from './components/Footer';
import Header from './components/Header';
import Headline from './components/Headline';
import ItemList from './components/ItemList';
import ExampleClass from './khacBietguncAndClassComponent/ExampleClassComponent';
import ExampleFunction from './khacBietguncAndClassComponent/ExampleFunctionalsComponent';
import FunctionComponent from './useOffect/FunctionComponent';
// data
const blog = {
    bigTitle: 'Heading của trang',
    itemList: [
      {
        id:1,
        title: 'Proin ex nunc',
        info: 'Proin ex nunc, bibendum ut magna quis.'
      },
      {
        id:2,
        title: 'Blandit mollis',
        info: 'Blandit mollis orci.ádsad Ut pretium diam ut tristique interdum amet condimentum.'
      },
      {
        id:3,
        title: 'Donec ut libero',
        info: 'Donec ut libero pretium, efficitur nisl vel, sagittis elit.'
      }
    ],
    boxList: [
      'Placerat arcu vel',
      'Duis at est nunc',
      'Tellus at trist',
      'Ut rhoncus'
    ]
  };
class App extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = blog
    // }
    // onClickBtn = () => {
    //     const id = 3
    //     this.setState(() => ({
    //         itemList: this.state.itemList.map((item) =>
    //           item.id === id
    //             ? {
    //                 ...item,
    //                 title: "Dương Minh Trí",
    //                 info: "thay đổi ìnof",
    //               }
    //             : item
    //         ),
    //       }));
    // }
    render(){
        return (
            // <div id="layout">
            //   <Header />
        
            //   <main>
            //     <section id="content">
            //       <Headline bigTitle={this.state.bigTitle}/>
            //       <ItemList itemList = {this.state.itemList} />
            //       <button type="button" onClick={this.onClickBtn}>Nhấn để thay đổi</button>
            //     </section>
        
            //     <Aside />
        
            //     <BoxList boxList = {this.state.boxList}/>
            //   </main>
        
            //   <Footer/>
            // </div>

            // sử dụng func
            // <ExampleFunction />
            // class
            // <ExampleClass />
            // useEffect with classComponent
            <FunctionComponent/>
          );
    }
}

export default App;