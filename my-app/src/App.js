import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counting: 0
      ,selectedItems: []
      ,list: []
      ,modal: false
      ,entries: [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
          "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
          }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
          "name": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity",
          "bs": "transition cutting-edge web services"
        }
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
          "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
          }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        }
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
          "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
          }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
          "name": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        }
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
          "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
          }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
          "name": "Johns Group",
          "catchPhrase": "Configurable multimedia task-force",
          "bs": "generate enterprise e-tailers"
        }
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
          "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
          }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
          "name": "Abernathy Group",
          "catchPhrase": "Implemented secondary concept",
          "bs": "e-enable extensible e-tailers"
        }
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
          "street": "Dayna Park",
          "suite": "Suite 449",
          "city": "Bartholomebury",
          "zipcode": "76495-3109",
          "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
          }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
          "name": "Yost and Sons",
          "catchPhrase": "Switchable contextually-based project",
          "bs": "aggregate real-time technologies"
        }
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Lebsackbury",
          "zipcode": "31428-2261",
          "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
          }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        }
      }
    ]
    };
    this.handleClickCheck = this.handleClickCheck.bind(this);
    this.handleComfirm = this.handleComfirm.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  handleComfirm (e) {
    let l = [];
    
    this.state.entries.map(value => {
      for (let i of this.state.selectedItems) {
        if (value.id === i) {
          l.push({
            id: value.id,
            name: value.name,
            email: value.email
          })
        }
      }
    }, this);
    
    this.setState({
      modal: true,
      list: l
    });
  }
  
  closeModal (e) {
    this.setState({
      modal: false
    });
  }
  
  handleClickCheck (e) {
    let check = e.target.checked, c = this.state.counting, el = parseInt(e.target.id), i = this.state.selectedItems;
    
    c = check ? c+1 : c-1;
    
    if(!check) i.splice(i.indexOf(el),1);
    
    i = check ? [...this.state.selectedItems, el] : i;
    
    this.setState({
        counting: c,
        selectedItems: i
      });
  }
  
  render() {
    return (
      <div className="main">
        <div className="fourth-container"> 
          <span className={this.state.counting > 0 ? "show" : "hide"}> {this.state.counting} of {this.state.entries.length} selected</span>
        </div>
        {
          this.state.entries
          .sort((a, b) => a.name > b.name)
          .map( value  =>  {
          
            return <div className="container" key={value.id}>
              <div className="first-item">
                  <input 
                    className="check-item" 
                    type="checkbox"
                    onClick={this.handleClickCheck}
                    id={value.id}
                    value="check"
                  />
              </div>
              <div className="second-container">
                <div className="second-item">
                  <span> {value.name} </span>
                </div>
                <div className="third-item">
                  <span> {value.email} </span>
                </div>
              </div>
            </div>;
          })
        }
        <div className="third-container"> 
          <button 
            className="button-item"
            onClick={this.handleComfirm}
          >
            Confirm
          </button>
        </div>
        <div className={this.state.modal ? "modal-container show" : "modal-container hide"}>
          <div className="modal-list">
            <li className="list">
              {this.state.list
                .sort((a, b) => a.name > b.name)
                .map( value  =>  {
                  return <ul className="list-item" key={value.id}> { value.name + " | " + value.email} </ul>              
                })
              }
            </li>
          </div>
          <div className="third-container modal-button"> 
            <button 
              className="button-item"
              onClick={this.closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
